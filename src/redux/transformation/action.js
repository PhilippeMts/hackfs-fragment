import { deploy_service } from "../../utils/process";
import { Particle, sendParticle, subscribeToEvent } from "@fluencelabs/fluence";
import { datasetsStore, transformationsStore } from "../../utils/localStorage";
import { RESULT_DATASET, SET_DATASET } from "../dataset/action";

export const INIT_TRANSFORMATIONS = "INIT_TRANSFORMATIONS";
export const SET_TRANSFORMATION = "SET_TRANSFORMATION";
export const TRANSFORMATION_RUN = "TRANSFORMATION_RUN";

export const initTransformations = () => async (dispatch, getState) => {
  const transformationKeys = await transformationsStore.keys();

  let objects = {};
  transformationKeys.forEach(k => transformationsStore.getItem(k, (err, value) => {
    // TODO Handle err
    objects[k] = { ...value, cid: k };
  }))

  dispatch({ type: INIT_TRANSFORMATIONS, payload: { objects }});
}

export const postTransformation = (transformationName, transformationDescription, transformationFile) => async (dispatch, getState) => {
  const ipfs = getState().ipfs.ipfs;

  const file = await ipfs.add(transformationFile);

    // Add to local storage
    await transformationsStore.setItem(
      file.cid.toString(),
      {
        file: transformationFile,
        name: transformationName,
        desc: transformationDescription,
      }
    );


    dispatch({ type: SET_TRANSFORMATION, payload: {name: transformationName, desc: transformationDescription, file: transformationFile, cid: file.cid.toString() }});
}

export const runTransformation = (transformationCID, datasetCID) => async (dispatch, getState) => {
    const { rpcAddress, ipfs } = getState().ipfs;
    const dataset = getState().dataset.objects[datasetCID];
    const { client, environment } = getState().fluence

    let serviceId = await deploy_service(
      client,
      environment[0].peerId, transformationCID, rpcAddress,
      (label, error) => { console.error("📕 deploy_service failed: ", label, error) },
      { ttl: 10000 }
    );

    subscribeToEvent(client, 'helloService', 'helloFunction', async(args) => {
        const [networkInfo] = args;

        const file = await ipfs.add(JSON.stringify(networkInfo));

        // Update parent dataset w/ new transformation
        const newHistory = dataset.history;
        newHistory.push({
          transformation: transformationCID,
          result: {
            cid: file.cid.toString(),
            jsonString: JSON.stringify(networkInfo)
          }
        })
        await datasetsStore.setItem(
          datasetCID,
          {
            jsonString: dataset.jsonString,
            name: dataset.name,
            history: newHistory
          }
        );

        // Update redux store
        dispatch({
          type: RESULT_DATASET,
          payload: {
            transformation: transformationCID,
            input: datasetCID,
            history: newHistory
          }});
    });

    const particle = new Particle(
      `
                  (seq
                    (call relay (service "transformation") [arg_0] result)
                    (call %init_peer_id% ("helloService" "helloFunction") [result])
                  )
              `,
      {
          relay: environment[0].peerId,
          service: serviceId,
          arg_0: JSON.parse(dataset.jsonString.replace(/\n/g, ""))
      },
    );
    await sendParticle(client, particle);
}


import { deploy_service } from "../../utils/process";
import { Particle, sendParticle, subscribeToEvent } from "@fluencelabs/fluence";

export const POST_TRANSFORMATION = "POST_TRANSFORMATION";
export const TRANSFORMATION_RUN = "TRANSFORMATION_RUN";


export const postTransformation = (transformationName, transformationFile) => async (dispatch, getState) => {
    const ipfs = getState().ipfs.ipfs;


    const file = await ipfs.add(transformationFile);


    dispatch({ type: POST_TRANSFORMATION, payload: {name: transformationName, cid: file.cid.toString()}});
}

export const runTransformation = (transformationCID, functionName) => async (dispatch, getState) => {
    const { ipfs, rpcAddress } = getState().ipfs;
    const { client, environment } = getState().fluence

    let serviceId = await deploy_service(
      client,
      environment[0].peerId, transformationCID, rpcAddress,
      (label, error) => { console.error("📕 deploy_service failed: ", label, error) },
      { ttl: 10000 }
    );

    // TODO smthing else than main ?
    // TODO call dispatch
    subscribeToEvent(client, 'helloService', 'helloFunction', (args) => {
        const [networkInfo] = args;
        console.log(args, networkInfo);
    });

    const particle = new Particle(
      `
                  (seq
                    (call relay (service function) [arg_1 arg_2] result)
                    (call %init_peer_id% ("helloService" "helloFunction") [result])
                  )
              `,
      {
          relay: environment[0].peerId,
          service: serviceId,
          function: functionName,
          arg_1: { field_0: 0 },
          arg_2: 15
      },
    );
    await sendParticle(client, particle);
}


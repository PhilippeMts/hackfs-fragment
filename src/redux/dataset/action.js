import { datasetsStore } from "../../utils/localStorage";

export const INIT_DATASET = "INIT_DATASET";
export const SET_DATASET = "SET_DATASET";
export const RESULT_DATASET = "RESULT_DATASET";

export const initDatasets = () => async (dispatch, getState) => {
  const datasetKeys = await datasetsStore.keys();

  let objects = {};
  datasetKeys.forEach(k => datasetsStore.getItem(k, (err, value) => {
    // TODO Handle err
    objects[k] = { ...value, cid: k };
  }))

  dispatch({ type: INIT_DATASET, payload: { objects }});
}

export const postDataSet = (datasetName, datasetJSON) => async (dispatch, getState) => {
  const { ipfs, localIPFS } = getState().ipfs;


  const file = await ipfs.add(datasetJSON);
  await localIPFS.add(datasetJSON)

  // Add to local storage
  await datasetsStore.setItem(
    file.cid.toString(),
    {
      jsonString: datasetJSON,
      name: datasetName,
      history: []
    }
  );


  dispatch({ type: SET_DATASET, payload: {name: datasetName, jsonString: datasetJSON, cid: file.cid.toString(), history: [] }});
}

import { datasetsStore } from "../../utils/localStorage";

export const INIT_DATASET = "INIT_DATASET";
export const SET_DATASET = "SET_DATASET";

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
  const ipfs = getState().ipfs.ipfs;


  const file = await ipfs.add(datasetJSON);

  // Add to local storage
  await datasetsStore.setItem(
    file.cid.toString(),
    {
      jsonString: datasetJSON,
      name: datasetName,
    }
  );


  dispatch({ type: SET_DATASET, payload: {name: datasetName, jsonString: datasetJSON, cid: file.cid.toString()}});
}

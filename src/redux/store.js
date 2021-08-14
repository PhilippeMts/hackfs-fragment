import { applyMiddleware, combineReducers, createStore } from 'redux';
import { transformationReducer } from './transformation/reducer';
import { fluenceReducer } from "./fluence/reducer";
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { IPFSReducer } from "./ipfs/reducer";
import { datasetReducer } from "./dataset/reducer";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))


export const store = createStore(
  combineReducers(
    {
      dataset: datasetReducer,
      transformation: transformationReducer,
      fluence: fluenceReducer,
      ipfs: IPFSReducer
    }
  ),
composedEnhancer)


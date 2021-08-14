import { INIT_DATASET, SET_DATASET } from "./action";

const initialState = {
  objects: {}
};


export const datasetReducer = function (state = initialState, action) {
  switch (action.type) {
    case INIT_DATASET: {
      return { objects: action.payload.objects };
    }
    case SET_DATASET: {
      // TODO do something W/ local storage
      return { objects: {...state.objects, [action.payload.cid]: action.payload}  };
    }
    default:
      return state;
  }
};

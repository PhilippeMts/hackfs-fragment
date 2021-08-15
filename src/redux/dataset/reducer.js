import { INIT_DATASET, RESULT_DATASET, SET_DATASET } from "./action";

const initialState = {
  objects: {}
};


export const datasetReducer = function (state = initialState, action) {
  switch (action.type) {
    case INIT_DATASET: {
      return { objects: action.payload.objects };
    }
    case SET_DATASET: {
      return { objects: {...state.objects, [action.payload.cid]: action.payload}  };
    }
    case RESULT_DATASET: {
      return {
        objects: {
          ...state.objects,
          [action.payload.input]: {
            ...state.objects[action.payload.input],
            history: action.payload.history
          }
        }
      };
    }
    default:
      return state;
  }
};

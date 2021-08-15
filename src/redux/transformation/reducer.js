import { INIT_TRANSFORMATIONS, SET_TRANSFORMATION, TRANSFORMATION_RUN } from "./action";

const initialState = {
  objects: {}
};


export const transformationReducer = function (state = initialState, action) {
  switch (action.type) {
    case INIT_TRANSFORMATIONS: {
      return { objects: action.payload.objects };
    }
    case SET_TRANSFORMATION: {
      return { objects: {...state.objects, [action.payload.cid]: action.payload}  };
    }
    default:
      return state;
  }
};

import { INIT_FLUENCE } from "./action";

const initialState = {
  client: undefined,
  environment: []
};


export const fluenceReducer = function (state = initialState, action) {
  switch (action.type) {
    case INIT_FLUENCE: {
      return action.payload;
    }
    default:
      return state;
  }
};

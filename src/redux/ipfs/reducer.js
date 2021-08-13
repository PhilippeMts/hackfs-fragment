import { INIT_IPFS } from "./action";

const initialState = {
  ipfs: undefined,
  nodeAddress: undefined,
  rpcAddress: ""
};


export const IPFSReducer = function (state = initialState, action) {
  switch (action.type) {
    case INIT_IPFS: {
      return action.payload;
    }
    default:
      return state;
  }
};

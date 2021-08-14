import {testNet} from "@fluencelabs/fluence-network-environment";
import { createClient } from "@fluencelabs/fluence";
import { initIPFS } from "../ipfs/action";
import { set_timeout } from "@fluencelabs/aqua-ipfs-ts";


export const INIT_FLUENCE = "INIT_FLUENCE";

export const initFluence = () => async (dispatch) => {
  const client = await createClient(testNet[0]);

  await set_timeout(client, testNet[0].peerId, 10);

  dispatch(initIPFS(client));
  dispatch({ type: INIT_FLUENCE, payload: {client, environment: testNet}});
}


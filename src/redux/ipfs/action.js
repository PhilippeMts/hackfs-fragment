import { get_external_api_multiaddr } from "@fluencelabs/aqua-ipfs-ts";
import { Multiaddr, protocols } from "multiaddr";
import { create } from "ipfs-http-client";


export const INIT_IPFS = "INIT_IPFS";

export const initIPFS = (provider) => async (dispatch) => {
  let rpcAddress;
  // TODO check for provider.relayPeerId
  const result = await get_external_api_multiaddr(provider, provider.relayPeerId);

  if (result.success) {
    rpcAddress = result.multiaddr;
  } else {
    console.error("Failed to retrieve external api multiaddr from %s: ", provider.relayPeerId);
    throw result.error;
  }

  let nodeAddress = new Multiaddr(rpcAddress).decapsulateCode(protocols.names.p2p.code).toOptions();
  console.log(nodeAddress)
  const ipfs = await create(nodeAddress);

  const localIPFS = await create({family: 4, host: "127.0.0.1", transport: "tcp", port: 5001});

  dispatch({ type: INIT_IPFS, payload: {ipfs, nodeAddress, rpcAddress, localIPFS }});
}


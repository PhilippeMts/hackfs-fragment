import IPFSGatewayTools from '@pinata/ipfs-gateway-tools/dist/browser'

const gatewayTools = new IPFSGatewayTools()
const desiredGatewayPrefix = 'https://ipfs.io'

export const ipfsToGateway = ipfsUrl => gatewayTools.convertToDesiredGateway(
  ipfsUrl, desiredGatewayPrefix)


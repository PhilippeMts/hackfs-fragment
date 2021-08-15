## `IDX`

This project relies on [Ceramic](https://ceramic.network/) and [IDX](https://idx.xyz/) to make this web-based platform truly collaborative.

#### Basic profile information

As an initial proof of concept, we first use profile information in the UI.

To make it work, just provide a Ceramic host URL and a DID address as environment variables (`REACT_APP_CERAMIC_API_URL` and ``).

If a [basic profile](https://developers.idx.xyz/guides/definitions/default/#basic-profile) is associated to the DID index, then it will be used, for instance to display related profile photo in the navigation bar.

If you want to test it locally, just follow the [installation instructions](https://developers.idx.xyz/build/installation/),
[create a DID](https://developers.idx.xyz/guides/cli/#create-your-did) and write a basic profile record like the following:
```json
{
  "image": {
    "original": {
      "src": "ipfs://bafybeiauhretradmcbdw2g3ylgmyxmkxzr6jz5fo5iste3d23tls2fd6fa/profile-picture.png",
      "width": 142,
      "height": 163,
      "mimeType": "image/png"
    }
  }
}
```

#### Dataset issues registry

Flexible collaboration on datasets is enabled through Ceramic and IDX using a [schema](./schemas/datasetIssuesRegistry.json) that helps users publish, read and resolve issues related to datasets at any stage of their history.

The schema is available on the [Ceramic](ceramic://k3y52l7qbv1frxifyyljgtvtifjku9c1ckkxwc012dtryd43nufsue3c50dgd62v4) network
and a related definition has been published and is discoverable with StreamID `kjzl6cwe1jw147lktei14azq9e8terqrjthpd2nbt1bpmk23ofr0vklh1yjlhq3`.
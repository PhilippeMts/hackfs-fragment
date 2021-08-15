<h1 align="center">Welcome to fragment 👋</h1>
<p>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> This project is a contribution to the [HackFS](https://fs.ethglobal.co/) hackathon organized by [ETHGlobal](https://ethglobal.co/) and [Protocol Labs](https://protocol.ai/).

> Fragment is a proposition to leverage Filecoin, IPLD schemas and the Fluence network to organize data processing pipeline in open contexts, foster collaboration data re-usability.

### 🏠 [Homepage](https://showcase.ethglobal.co/hackfs2021/fragment)

## Content

This project is mainly made of a ReactJS application, taking advantage of the amazing [Black Dashboard](https://demos.creative-tim.com/black-dashboard-react/#/dashboard) template.

Sources related more specifically to [IDX](https://idx.xyz/) are available in [`./idx`](./idx/README.md),
and parts related to IPLD schemas are in [`./ipld`](./ipld/README.md) with proper documentation.

### Install

```sh
npm install
```

### Usage

```sh
npm run start
```

## Use of other protocols

### Protocol Labs

Our project heavily relies on three main components initiated by Protocol Labs, namely IPFS, IPLD and web3.storage.

- **IPFS** : all storage operations which take place in our application leverage IPFS.
- **IPLD** schemas make the whole application operate in a fully decentralized way. The exploration of complex data as well as data validation are also facilitated.
- finally, **web3.storage** makes the application free to use and even more decentralized as our progressive webapp directly interacts with this service.

### Fluence Labs

Tools developed by Fluence Labs are at the core of our project.

We aim at proving that today's web3 stack enable the emergence of truly open data processing pipelines, and we tried to create a collaborative platform to prove it. We see *data processing pipelines* as a pile of atomic transformations on top of initial datasets. In many senses, we share a part of the ambition of Fluence Labs and it is therefore natural that several characteristics of their infrastructure and their Wasm runtime made them a flawless and essential element in our stack. Fluence essentially helps us run atomic transformations on top of data, both stored and identified on IPFS. These transformations then create decentralized pipelines.

A second reason why we rely on Fluence is that we tried to leverage their stack with Ceramic's IDX to enable a truly collaborative experience during the development of data processing pipelines. As all pipeline-related data are on IPFS, we also aim at putting collaboration-related data (profile information, comments, issues, access management,…) on IPFS through Ceramic and IDX.

### IDX

In our attempt to create open data processing pipelines backed by IPFS, we tried to leverage IDX in order to enable full collaboration on our platform. As all pipeline-related data are on IPFS and heavily used by the Fluence protocol, we also aimed at putting collaboration-related data (profile information, comments, issues, access management,…) on IPFS through Ceramic and IDX.

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/PhilippeMts/hackfs-fragment/issues). 


***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
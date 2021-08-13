const localforage = require('localforage')

const transformationsStore = localforage.createInstance({
  name: 'transformations',
})

const datasetsStore = localforage.createInstance({
  name: 'datasets',
})

export {
  transformationsStore,
  datasetsStore
}
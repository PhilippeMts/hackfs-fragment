const localforage = require('localforage')

const transformationsStore = localforage.createInstance({
  name: 'transformations',
})

const datasetsStore = localforage.createInstance({
  name: 'datasets',
})

const historyStore = localforage.createInstance({
  name: 'history',
})

export {
  historyStore,
  transformationsStore,
  datasetsStore
}

import { version, name } from '../../package.json';

import localforage from 'localforage';
import memoryDriver from 'localforage-memoryStorageDriver';
import { setup } from 'axios-cache-adapter';

async function fetch() {
  await localforage.defineDriver(memoryDriver);

  const forageStore = localforage.createInstance({
    driver: [localforage.INDEXEDDB, localforage.LOCALSTORAGE, memoryDriver._driver],
    name: `${name}_${version}_`,
  });

  return setup({
    cache: {
      maxAge: 9999999 * 60 * 1000,
      store: forageStore,
      exclude: { query: false },
    },
  });
}

export { fetch };

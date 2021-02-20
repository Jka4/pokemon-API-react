import { version, name } from '../../package.json';

const ls = (() => {
  let cache = {};

  const save = (state: any, type: string) => {
    const keyLiteral = `${name}_${version}_${type}`;

    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(keyLiteral, serializedState);
    } catch (error) {
      console.group();
      console.log('Ooops, state not saved to localStorage');
      console.log('=> ', error);
      console.groupEnd();
    }
  };

  const load = (type: string) => {
    const keyLiteral = `${name}_${version}_${type}`;

    try {
      const serializedState = localStorage.getItem(keyLiteral);
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (error) {
      return undefined;
    }
  };

  //  load cache from ls on app init
  if (load('API') !== undefined && Object.keys(load('API')).length !== 0) {
    cache = load('API');
  }

  return {
    save: save,
    load: load,
    cache: cache,
  };
})();

export { ls };

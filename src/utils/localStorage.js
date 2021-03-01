import { version, name } from '../../package.json';

const ls = (() => {
  const keyLiteral = `${name}_${version}_`;

  const save = (state) => {
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

  const load = () => {
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

  return {
    save: save,
    load: load,
  };
})();

export { ls };

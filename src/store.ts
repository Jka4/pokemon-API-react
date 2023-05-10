import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { ls } from 'utils/localStorage';
import throttle from 'lodash.throttle';
import rootReducer from 'reducers';

const store = configureStore({
  reducer: rootReducer,
  preloadedState: ls.load(),
  middleware: [thunk],
});

store.subscribe(throttle(() => ls.save(store.getState()), 1000));

export default store;

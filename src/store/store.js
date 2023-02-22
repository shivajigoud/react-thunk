import { configureStore, thunk } from '@reduxjs/toolkit';
import combineReducers from '../reducers/rootReducer';

const store = configureStore({
  reducer: combineReducers,
  middleware: thunk,
});
export default store;

import { configureStore, combineReducers } from '@reduxjs/toolkit';

import photoReducer from './ducks/pictures';

const rootReducer = combineReducers({ photoReducer });

const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

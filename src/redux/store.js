// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';
import authReducer from './reducers/auth'; // Create this reducer
const persistConfig = {
  key: 'persist-store',
  storage
}
const rootReducer = combineReducers({
  auth: authReducer,
  // Other reducers can be added here
});
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));
export const persistor = persistStore(store)

export default store;

// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';
import authReducer from './reducers/auth'; // Create this reducer
import bookingReducer from './reducers/appointment';
import offerReducer from './reducers/offer';
import announcementReducer from './reducers/announcement';
const persistConfig = {
  key: 'persist-store',
  storage
}
const rootReducer = combineReducers({
  auth: authReducer,
  appointment: bookingReducer,
  offer:offerReducer,
  announcement:announcementReducer
  // Other reducers can be added here
});
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));
export const persistor = persistStore(store)

export default store;

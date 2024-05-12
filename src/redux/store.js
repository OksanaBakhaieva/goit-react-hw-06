import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import itemsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';


const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

const pContactsReducer = persistReducer(contactsPersistConfig, itemsReducer);

export const store = configureStore({
  reducer: {
    contacts: pContactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

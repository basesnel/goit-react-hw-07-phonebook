import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
// };

const filterPersistConfig = {
  key: 'filter',
  storage,
};

// const persistedContactsReducer = persistReducer(
//   contactsPersistConfig,
//   contactsReducer
// );

const persistedFilterReducer = persistReducer(
  filterPersistConfig,
  filterReducer
);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filterStore: persistedFilterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

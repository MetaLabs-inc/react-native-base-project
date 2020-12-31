import {Action, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import thunk, {ThunkAction} from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
// import { AuthController } from 'src/networking/controllers/auth'
import rootReducer, {RootState} from './rootReducer';
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

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Here will be put the controllers which will be used with dependency injection in actions
// import { ExtraArguments } from './types'
// const extraArgs: ExtraArguments = {
//   authController: AuthController,
// }
// const thunkWithArgs = thunk.withExtraArgument(extraArgs)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // Uncomment if you add a controller in args
  //   middleware: [thunkWithArgs],
});

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export {store, persistor};

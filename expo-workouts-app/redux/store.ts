import {AnyAction, combineReducers, configureStore} from '@reduxjs/toolkit'
import splitsListReducer from '../screens/Split-List/SplitList.slice'
import onboardingReducer from '../screens/Onboarding/Onboarding.slice'

import AsyncStorage from '@react-native-async-storage/async-storage'

import {
  persistStore,
  persistReducer,
  persistCombineReducers,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'reduxjs-toolkit-persist'
import {workoutsApi} from './middlewear/api'
import {setupListeners} from '@reduxjs/toolkit/dist/query'

const asyncStorageKey = 'workoutsApp'

const persistConfig = {
  key: asyncStorageKey,
  storage: AsyncStorage,
  blacklist: [],
}

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const reducers = {
//   splits: splitsListReducer,
//   [pokemonApi.reducerPath]: pokemonApi.reducer,
// }
const reducers = combineReducers({
  splits: splitsListReducer,
  onboarding: onboardingReducer,
  [workoutsApi.reducerPath]: workoutsApi.reducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)
// export type MainState = ReturnType<typeof appReducer>

// const appReducer = combineReducers({
//   splitsListReducer,
// })

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const rootReducer: any = (state: MainState, action: AnyAction) => {
//   const reducerState = action.type === 'RESET_STATE' ? undefined : state
//   return appReducer(reducerState, action)
// }
// console.log('store')
// export const store = configureStore({
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//   reducer: rootReducer,
// })

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        warnAfter: 128,
      },
      immutableCheck: {warnAfter: 128},
    }).concat(workoutsApi.middleware),
})
setupListeners(store.dispatch)
export const persistor = persistStore(store)

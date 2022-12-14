import {AnyAction, combineReducers, configureStore} from '@reduxjs/toolkit'
import splitsListReducer from '../screens/Split-List/SplitList.slice'

// export type MainState = ReturnType<typeof appReducer>

// const appReducer = combineReducers({
//   splitsListReducer,
// })

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const rootReducer: any = (state: MainState, action: AnyAction) => {
//   const reducerState = action.type === 'RESET_STATE' ? undefined : state
//   return appReducer(reducerState, action)
// }
console.log('store')
// export const store = configureStore({
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//   reducer: rootReducer,
// })

export const store = configureStore({
  reducer: {
    splits: splitsListReducer,
  },
})

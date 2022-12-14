import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface SplitListState {
  splits: string[]
}
const initialState: SplitListState = {
  splits: [],
}

export const splitListSlice = createSlice({
  name: 'splitList',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.splits = [...state.splits, action.payload]
    },
    remove: (state, action: PayloadAction<string>) => {
      state.splits = [...state.splits.filter(s => s !== action.payload)]
    },
  },
})
console.log('here')
export default splitListSlice.reducer

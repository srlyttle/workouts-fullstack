import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface Workout {
  name: string
  exercises: Exercise[]
}
export enum Category {
  Chest = 'Chest',
  Back = 'Back',
  Shoulders = 'Shoulders',
}
export interface Exercise {
  name: string
  category: Category
}

export interface Split {
  name: string
  workouts: Workout[]
}
interface SplitListState {
  splits: Split[]
}
const initialState: SplitListState = {
  splits: [
    {
      name: 'Push Pull Legs',
      workouts: [{name: 'Push', exercises: [{name: 'Bench Press', category: Category.Chest}]}],
    },
  ],
}

export const splitListSlice = createSlice({
  name: 'splitList',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Split>) => {
      state.splits = [...state.splits, action.payload]
    },
    remove: (state, action: PayloadAction<Split>) => {
      state.splits = [...state.splits.filter(s => s !== action.payload)]
    },
  },
})

export default splitListSlice.reducer

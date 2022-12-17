import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface OnboardingState {
  isOnboardingCompleted: boolean
}

const initialState: OnboardingState = {
  isOnboardingCompleted: false,
}

export const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    updateOnboarding: (state, action: PayloadAction<boolean>) => {
      state.isOnboardingCompleted = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {updateOnboarding} = onboardingSlice.actions

export default onboardingSlice.reducer

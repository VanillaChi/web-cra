import { createSlice } from '@reduxjs/toolkit'
import type { UiStateProps } from './interface'

const initialState: UiStateProps = {
  isLoading: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setIsLoading(state, action: { payload: UiStateProps['isLoading'] }) {
      state.isLoading = action.payload
    },
  },
})

export const { setIsLoading } = uiSlice.actions

export default uiSlice.reducer

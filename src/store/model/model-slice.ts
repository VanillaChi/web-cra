import { createSlice } from '@reduxjs/toolkit'

interface ModelStateProps {
  role: string
}

const initialState: ModelStateProps = {
  role: 'admin',
}

export const modelSlice = createSlice({
  name: 'model',
  initialState,
  reducers: {
    setRole(state, action: { payload: { role: ModelStateProps['role'] } }) {
      state.role = action.payload.role
    },
  },
})

export const { setRole } = modelSlice.actions

export default modelSlice.reducer

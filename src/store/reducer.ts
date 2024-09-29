import { combineReducers } from '@reduxjs/toolkit'
import { uiSlice } from './ui/ui-slice'
import { modelSlice } from './model/model-slice'

const rootReducer = combineReducers({
  ui: uiSlice.reducer,
  model: modelSlice.reducer,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>

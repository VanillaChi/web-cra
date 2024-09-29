import { createSelector } from 'reselect'
import type { RootState } from '../reducer'

export const selectModel = (state: RootState) => state.model

export const selectModelRole = createSelector(
  selectModel,
  (model) => model.role
)

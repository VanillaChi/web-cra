import { createSelector } from 'reselect'
import type { RootState } from '../reducer'

export const selectUiIsLoading = (state: RootState) => state.ui.isLoading

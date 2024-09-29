import reducer from './reducer'
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const createStore = () => {
  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
  })

  return store
}

export const useThunkDispatch = () => useDispatch()

export default createStore

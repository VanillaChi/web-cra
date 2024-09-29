import React, { useMemo } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import createStore from './store/store'
import PiLayout from './components/layout'
import Sider from '@components/sider'
import Todo from '@components/todo'
import './App.css'

function App() {
  const store = useMemo(() => createStore(), [])

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<PiLayout sider={<Sider />} content={<Todo />} />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App

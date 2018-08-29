import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store'
import Routes from './config/routes'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <h1>Test1</h1>
      <Routes />
      <h1>test2</h1>
    </BrowserRouter>
  </Provider>
)

export default App

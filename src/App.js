import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store'
import Routes from './config/routes'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <h1>V2</h1>
      <Routes />
    </BrowserRouter>
  </Provider>
)

export default App

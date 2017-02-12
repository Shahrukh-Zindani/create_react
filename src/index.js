import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Routes from './config/routes'
import reducer from './reducers'
// import App from './App'
import './index.css'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root')
)

import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'

import Routes from './config/routes'
import reducer from './reducers'
import './index.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line

const enhancer = composeEnhancers()
const store = createStore(reducer, enhancer)

render(
  <Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root')
)

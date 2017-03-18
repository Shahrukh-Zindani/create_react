import React from 'react'
import { render } from 'react-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'

import routes from './config/routes'
import reducer from './reducers'
import './index.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers()
const store = createStore(reducer, enhancer)

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
)

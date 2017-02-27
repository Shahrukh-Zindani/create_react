import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import AddToDo from '../components/containers/AddToDo'

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={AddToDo} />
  </Router>
)

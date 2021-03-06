import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import App from '../components/App'

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
)
export default Routes

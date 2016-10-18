import React from 'react'
import cn from 'classnames'

const NotFound = ({ className, ...props}) => (
  <div className={cn('App', className)} { ...props }>
    <h1>
      404 <small>Not Found :(</small>
    </h1>
  </div>
)

export default NotFound

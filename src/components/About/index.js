import React from 'react'
import cn from 'classnames'

// TODO: One more todo to test
const About = (props) => {
  const { className, ...other } = props //eslint-disable-line
  return (
    <div className={cn('App', className)}>
      <h1>About</h1>
    </div>
  )
}

export default About

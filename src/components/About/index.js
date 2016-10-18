import React from 'react'
import cn from 'classnames'

import style from './About.css'

const About = ({ className, ...props }) => (
  <div className={cn('App', className)} { ...props }>
    <h1>About</h1>
  </div>
)

export default About

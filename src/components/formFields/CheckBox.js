import React from 'react'
import './Style.css'

class CheckBox extends React.Component {
  render() {
    const { value, name, checked, onClick } = this.props
    return(
      <input type="checkbox" name={name} value={value} checked={checked} onClick={onClick}/>
    )
  }
}

export default CheckBox

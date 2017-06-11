import React from 'react'


const CheckBox = ({ value, name, checked, onClick }) =>
  <input type="checkbox" name={name} value={value} checked={checked} onClick={onClick} />

export default CheckBox

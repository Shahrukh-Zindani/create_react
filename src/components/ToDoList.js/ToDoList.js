import React from 'react'
import CheckBox from '../../container/CheckBox'

const ToDoList = ({ list, onListClick, className }) => (
  <div className={className}>
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          <CheckBox value={item} label={item} name={item} onClick={() => onListClick(index)} />
          {item}
        </li>)
      )}
    </ul>
  </div>
)

export default ToDoList

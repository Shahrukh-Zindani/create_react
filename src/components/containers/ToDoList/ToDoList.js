import React from 'react'
import { connect } from 'react-redux'
import CheckBox from '../../formFields/CheckBox'
import { removeTodoFromList } from '../../../actions/todoActions'

const ToDoComp = ({ item, index, removeTodoFromList: removeTodo }) => (
  <li key={index}>
    <CheckBox value={item} label={item} name={item} onClick={removeTodo} />
    {item}
  </li>
)

const ToDo = connect(null, { removeTodoFromList })(ToDoComp)

const ToDoList = ({ list, className }) => (
  <div className={className}>
    <ul>
      {list.map((item, index) => <ToDo item={item} index={index} />)}
    </ul>
  </div>
)

const mapStateToProps = ({ todos }) => ({ list: todos.list })

export default connect(mapStateToProps, null)(ToDoList)

import React from 'react'
import AddToDo from '../containers/AddToDo'
import ToDoList from '../containers/ToDoList'
import DatePicker from '../containers/DatePicker'
import './App.css'
// TODO Extend App.js
const App = ({ className }) => (
  <div className={className}>
    <AddToDo />
    <ToDoList className="todo" />
    <DatePicker />
  </div>
)

export default App

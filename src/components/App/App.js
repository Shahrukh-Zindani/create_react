import React from 'react'
import AddToDo from '../containers/AddToDo'
import ToDoList from '../containers/ToDoList'
import './App.css'
// TODO Write test case for it
const App = ({ className }) => (
  <div className={className}>
    <AddToDo />
    <ToDoList className="todo" />
  </div>
)

export default App

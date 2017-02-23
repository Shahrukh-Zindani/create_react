import React from 'react'
import { connect } from 'react-redux'
import InputField from '../../container/InputField'
import Button from '../../container/Button'
import ToDoList from '../ToDoList'
import './App.css'

const App = ({ className, list }) => (
  <div className={className}>
    <InputField />
    <Button />
    <ToDoList className="todo" list={list} />
  </div>
)

const mapStateToProps = (state) => ({ list: state.todos.list })

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(App)

import React, { Component } from 'react'
import cn from 'classnames'

import logo from './logo.svg'
import InputField from '../FormFields/InputField'
import Button from '../FormFields/Button'
import CheckBox from '../FormFields/CheckBox'

import './App.css'

const ToDoList = ({ list, onListClick, className }) => (
  <div className={cn('App', className)}>
    <ul>
      { list.map((item, index) => (
        <li key={index}>
          <CheckBox value={item} label={item} name={item} onClick={() => onListClick(index)}/>
          {item}
        </li>)
      )}
    </ul>
  </div>
)


class App extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {
    list: [],
  }
  click = (e) => {
    const listItem = this.input.state.value
    const listOfTodos = this.state.list
    listOfTodos.push(listItem)
    this.setState({ list: listOfTodos })
  }
  onListClick = (index) => {
    const listOfTodos = this.state.list
    delete listOfTodos[index]

    this.setState({ list: listOfTodos })
  }
  render() {
    const { className, ...props } = this.props
    const { list } = this.state
    return (
      <div className={cn('App', className)} { ...props }>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ul className="List">
          <InputField ref={(node) => this.input = node}/>
          <Button onClick={this.click} />
        </ul>
        <ToDoList className="todo" list={list} onListClick={this.onListClick}/>
      </div>
    )
  }
}

export default App

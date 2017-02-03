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
      {list.map((item, index) => (
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
    // finished: [],
    // unFinished: []
  }
  constructor(props) {
    super(props)
    this.init()
  }

  init = () => {
    this.setState({
      textValue: '',
      list: []
    })
  }
  addItem = (e) => {
    const { textValue: listItem, list: listOfTodos } = this.state
    listOfTodos.push(listItem)

    this.setState({ list: listOfTodos, textValue: '' })
    this.takeScreenshot()
  }

  takeScreenshot = () => {
  }
  onListClick = (index) => {
    const listOfTodos = this.state.list
    delete listOfTodos[index]

    this.setState({ list: listOfTodos })
  }
  onTextChange = (event) => {
    this.setState({ textValue: event.target.value })
  }
  render() {
    const { className } = this.props
    const { list } = this.state
    return (
      <div className={cn('App', className)}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ul className="List">
          <InputField value={this.state.textValue} onChange={this.onTextChange}/>
          <Button onClick={this.addItem} />
        </ul>
        <ToDoList className="todo" list={list} onListClick={this.onListClick}/>
      </div>
    )
  }
}

export default App

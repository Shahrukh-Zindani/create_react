import React, { Component } from 'react'
import cn from 'classnames'

import InputField from '../../container/InputField'
import Button from '../../container/Button'
import CheckBox from '../../container/CheckBox'

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
  constructor(props) {
    super(props)
    this.state = {
      list: [],
    }
    this.init()
  }

  componentDidMount() {
    console.log('test')
  }
  init = () => {
    this.setState({
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
  render() {
    const { className } = this.props
    const { list } = this.state
    return (
      <div >
        <ul className={cn('App', className)}>
          <InputField ref={(elem) => { this.node = elem }}/>
          <Button onClick={this.addItem} />
        </ul>
        <ToDoList className="todo" list={list} onListClick={this.onListClick}/>
      </div>
    )
  }
}

export default App

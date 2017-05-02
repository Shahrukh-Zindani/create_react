import React from 'react'
import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../../reducers'
import AddToDo, { AddToDoView } from '../containers/AddToDo/AddToDo'
import App from './App'


// const mockStore = configureStore()
let store
let container
let wrapper

// TODO Testing todo
// testing the connected component
beforeEach(() => {
  store = createStore(reducer)
  container = shallow(<AddToDo store={store} />)
  wrapper = mount(<Provider store={store}><App /></Provider>)
})
// testing the dumb component
it('renders without crashing', () => {
  const comp = shallow(<AddToDoView />)
  expect(comp.length).toEqual(1)
})
it('connected renders without crashing', () => {
  expect(container.length).toEqual(1)
})

it('test the connected app', () => {
  expect(wrapper.find(App).length).toEqual(1)
})

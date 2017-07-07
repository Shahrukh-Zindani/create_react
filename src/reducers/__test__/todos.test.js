import { List, Map } from 'immutable'
import todos from '../todos'
import actionTypes from '../../constants/actionTypes'

const todoInitialStateFixture = Map({ list: List([]) })

const dummyArray = ['test1', 'test2']
const toDoDeleteFixture = Map({
  list: List(dummyArray),
})

describe('todos reducer', () => {
  it('handle initial state', () => {
    expect(todos(undefined, {})).toEqual(todoInitialStateFixture)
  })
  it('should handle ADD_TODO', () => {
    expect(
      todos(todoInitialStateFixture, {
        type: actionTypes.ADD_TODO,
        value: 'Test Note',
      })
    ).toEqual(todoInitialStateFixture.merge({ list: todoInitialStateFixture.get('list').push('Test Note') }))
  })
  it('should handle REMOVE_TODO if it finds the index', () => {
    expect(
        todos(
          toDoDeleteFixture, {
            type: actionTypes.REMOVE_TODO,
            value: 'test1',
          }
        )
      ).toEqual(Map({ list: List(['test2']) }))
  })
})

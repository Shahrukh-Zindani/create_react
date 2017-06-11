import { append, findIndex, equals, remove } from 'ramda'
import actionTypes from '../constants/actionTypes'
import todo from '../initialStates/todos'

const findItemFromList = (item, list) => findIndex(equals(item), list)

const todos = (state = todo, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        list: append(action.value, state.list),
      }
    case actionTypes.REMOVE_TODO: {
      const indexOfTodo = findItemFromList(action.value, state.list)
      return {
        ...state,
        list: indexOfTodo !== -1 ? remove(indexOfTodo, 1, state.list) : state.list,
      }
    }
    default:
      return state
  }
}

export default todos

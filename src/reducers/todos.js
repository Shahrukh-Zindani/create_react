import { findIndex, equals } from 'ramda'
import actionTypes from '../constants/actionTypes'
import todo from '../initialStates/todos'

const findItemFromList = (item, list) => findIndex(equals(item), list)

const todos = (state = todo, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return state.merge({ list: state.get('list').push(action.value) })
    case actionTypes.REMOVE_TODO: {
      const listState = state.get('list')
      const indexOfTodo = findItemFromList(action.value, listState.toJS())
      return state.merge({
        list: indexOfTodo !== -1 ? listState.delete(indexOfTodo) : listState,
      })
    }
    default:
      return state
  }
}

export default todos

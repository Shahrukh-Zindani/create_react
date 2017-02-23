import actionTypes from '../constants/actionTypes'
import todo from '../initialStates/todos'

const todos = (state = todo, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        list: action.value,
      }
    default:
      return state
  }
}

export default todos

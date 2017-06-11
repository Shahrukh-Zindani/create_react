import actionTypes from '../constants/actionTypes'

export const addTodo = (text) => ({ type: actionTypes.ADD_TODO, value: text })

export const removeTodoFromList = ({ target }) => ({ type: actionTypes.REMOVE_TODO, value: target.value })

import React from 'react'
import { connect } from 'react-redux'
import Button from '../../formFields/Button'
import { addTodo } from '../../../actions/todoActions'

export const AddToDoView = ({ addToDoFromProps }) => {
  let input
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          addToDoFromProps(input.value)
          input.value = ''
        }}
      >
        <input ref={(node) => { input = node }} />
        <Button type="submit">
          Add Todo
        </Button>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addToDoFromProps: (value) => {
    dispatch(addTodo(value))
  }
})

const AddToDo = connect(null, mapDispatchToProps)(AddToDoView)
export default AddToDo

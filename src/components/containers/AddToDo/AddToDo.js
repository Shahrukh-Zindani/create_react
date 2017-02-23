import React from 'react'
import { connect } from 'react-redux'
import Button from '../../formFields/Button'
import { addTodo } from '../../../actions/todoActions'

const AddToDo = ({ dispatch }) => {
  let input
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
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

export default connect()(AddToDo)

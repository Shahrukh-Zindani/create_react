import * as actions from '../todoActions'
import actionTypes from '../../constants/actionTypes'


describe('todo actions need to be tested', () => {
  it('add todo action with text test1', () => {
    expect(actions.addTodo('test1')).toEqual({
      type: actionTypes.ADD_TODO,
      value: 'test1',
    })
  })
})

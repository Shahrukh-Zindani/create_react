import React from 'react'
import renderer from 'react-test-renderer'
import AddToDo from '../components/containers/AddToDo'

// it('renders without crashing', () => {
//   const div = document.createElement('div')
//   ReactDOM.render(<App />, div)
// })

describe('<AddToDo />', () => {
  it('test', () => {
    const tree = renderer.create(<AddToDo />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

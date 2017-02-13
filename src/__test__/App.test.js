import React from 'react'
import { mount } from 'enzyme'
import App from '../components/App/'

// it('renders without crashing', () => {
//   const div = document.createElement('div')
//   ReactDOM.render(<App />, div)
// })

describe('<App />', () => {
  it('doesn\'t contains the welcome message', () => {
    const wrapper = mount(<App />)
    const welcome = <h2>Welcome to React</h2>
    expect(wrapper.contains(welcome)).toEqual(false)
  })
})

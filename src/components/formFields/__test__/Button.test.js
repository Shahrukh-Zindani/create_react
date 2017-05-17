import React from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'
import Button from '../Button'

// testing the dumb component
it('renders without crashing', () => {
  const wrapper = shallow(<Button>{'Test'}</Button>)
  const test = 'Test'
  expect(wrapper.contains(test)).toEqual(true)
})
it('matches snapshot', () => {
  const tree = renderer.create(
    <Button />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

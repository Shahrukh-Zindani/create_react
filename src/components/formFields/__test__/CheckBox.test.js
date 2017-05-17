import React from 'react'
import renderer from 'react-test-renderer'
import CheckBox from '../CheckBox'

describe('Input Field tests', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <CheckBox />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

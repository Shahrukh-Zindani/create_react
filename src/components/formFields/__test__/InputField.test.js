import React from 'react'
import renderer from 'react-test-renderer'
import InputField from '../InputField'

describe('Input Field tests', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <InputField />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

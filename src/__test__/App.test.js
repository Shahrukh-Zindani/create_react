import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App/'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

const sum = (a, b) => a + b

// test('sum', () => {
//   expect(sum(1, 4)).toBe(5)
// })


describe('add()',  () => {
  it('adds two numbers', () => {
    expect(sum(2, 1)).toEqual(3)
  })
  it('does not add the third number', () => {
    expect(sum(2, 3, 5)).toEqual(sum(2, 3))
  })
})

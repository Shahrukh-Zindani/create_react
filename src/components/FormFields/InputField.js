import React from 'react'

class InputField extends React.Component {
  state = { value: ''}
  onChange = (event) => {
    this.setState({ value: event.target.value })
  }
  render() {
    return(
      <input onChange={this.onChange} value={this.state.value} />
    )
  }
}


export default InputField

import React from 'react'

class InputField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value })
  }

  onChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    const { value } = this.state
    return (
      <input onChange={this.onChange} value={value} />
    )
  }
}

export default InputField

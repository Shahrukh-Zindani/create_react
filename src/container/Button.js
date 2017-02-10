import React from 'react'

class ButtonField extends React.Component {
  static propTypes = {
    onClick: React.PropTypes.func
  }
  render() {
    return (
      <button onClick={this.props.onClick}> + </button>
    )
  }
}

export default ButtonField

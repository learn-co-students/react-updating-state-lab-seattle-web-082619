import React from 'react'

class DigitalClicker extends React.Component {
  state = {
    timesClicked: 0
  }

  addClick = () => {
    this.setState(previousState => {
      return { timesClicked: previousState.timesClicked + 1 }
    })
  }

  render() {
    return <div>
      <button onClick={ this.addClick }>{ this.state.timesClicked }</button>
    </div>
  }
}

export default DigitalClicker;
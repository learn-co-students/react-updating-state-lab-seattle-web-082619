import React from 'react';

export default class YouTubeDebugger extends React.Component {

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  handleBitrateClick = click => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResolutionClick = click => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render () {
    return <div>
      <button onClick={this.handleBitrateClick} className="bitrate">Bitrate</button>
      <button onClick={this.handleResolutionClick} className="resolution">Resolution</button>
    </div>
  }
}
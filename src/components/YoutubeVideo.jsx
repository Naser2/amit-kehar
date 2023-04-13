import React from 'react'
import YouTube from 'react-youtube'

export default class YoutubeVideo extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
      },
    }

    return (
      <div className="w-200px] gallery-item relative mx-4 ">
        <h3>GeeksforGeeks - Youtube</h3>
        <YouTube
          videoId={this.props.videoID}
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    )
  }

  _onReady(event) {
    event.target.pauseVideo()
  }
}

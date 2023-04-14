import React from 'react'
import YouTube from 'react-youtube'

export default class YoutubeVideo extends React.Component {
  render() {
    const opts = {
      height: ['190'],
      width: ['340', '450'],
      playerVars: {
        autoplay: 1,
      },
    }

    return (
      <div className="gallery-item h-190 w-120 relative w-[240px]  sm:w-[290px]">
        {/* <h3>GeeksforGeeks - Youtube</h3> */}
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

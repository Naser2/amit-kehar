import React from 'react'
import YouTube from 'react-youtube'

export default class YoutubeVideo extends React.Component {
  render() {
    const opts = {
      // height: '100%',
      // width: '100%',
      playerVars: {
        autoplay: 1,
      },
    }

    return (
      <div id="YOUTUBE_VIDEO" className="iframe  relative rounded-md">
        {/* min-w-[426px] min-w-[426px] sm:w-[490px] lg:min-h-[600px] lg:min-w-[800]  */}
        {/* <h3>GeeksforGeeks - Youtube</h3> */}
        <YouTube
          videoId={this.props.videoID}
          opts={opts}
          onReady={this._onReady}
        />
        {/* <iframe
          allow="autoplay; fullscreen"
          allowfullscreen=""
          src="https://player.vimeo.com/video/312333906?app_id=122963&amp;wmode=opaque&amp;autoplay=1"
          width="640"
          frameborder="0"
          title="The Stillness Within You"
          height="360"
          id="yui_3_17_2_1_1681612016015_1250"
          style={{ opacity: 1 }}
        ></iframe> */}
      </div>
    )
  }

  _onReady(event) {
    event.target.pauseVideo()
  }
}

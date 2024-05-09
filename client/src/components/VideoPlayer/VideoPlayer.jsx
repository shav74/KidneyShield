import React, { useRef } from "react"
import "./VideoPlayer.css"
import PropTypes from "prop-types"

const VideoPlayer = ({ playState, setPlayerState, source }) => {
  const player = useRef(null)
  const closePlayer = (e) => {
    if (e.target === player.current) {
      console.log("player clise")
      setPlayerState(false)
      const videoElement = player.current.children[0]
      videoElement.pause()
    }
  }
  return (
    <div
      ref={player}
      onClick={closePlayer}
      className={`video-player ${playState ? "" : "hide"}`}
    >
      <video src={source} autoPlay controls muted></video>
    </div>
  )
}

VideoPlayer.propTypes = {
  playState: PropTypes.bool.isRequired,
  setPlayerState: PropTypes.func.isRequired,
}

export default VideoPlayer

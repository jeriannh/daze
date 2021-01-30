import React from "react"

const Video = ({ videoSrcURL, videoTitle }) => {
  return (
    <div className="video">
      <iframe
        className="w-full rounded-lg"
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </div>
  )
}

export default Video

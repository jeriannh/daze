import React from "react"

const Video = ({ videoSrcURL }) => {
  console.log({ videoSrcURL })
  return (
    <div className="video">
      <iframe
        className="w-full h-72 rounded-lg"
        src={videoSrcURL}
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

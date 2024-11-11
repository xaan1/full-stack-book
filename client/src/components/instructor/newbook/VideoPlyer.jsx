
import React from 'react'
import ReactPlayer from 'react-player'

const VideoPlyer = ({
    width = "100%",
    height = "100%",
    url,
}) => {
  return (
    <div
    className={` bg-gray-900 rounded-lg overflow-hidden shadow-2xl transition-all duration-300 ease-in-out 
     
        `}

    style={{
        width: width,
        height: height
    }}

    
    >


    <ReactPlayer    width="100%"
        height="100%"  url={url}  controls  />

    </div>
  )
}

export default VideoPlyer
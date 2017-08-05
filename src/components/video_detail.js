// When making a component, when decideing whether to go class or go functional,
// the real deciding factor should be whether or not it needs to use any state
  // This is an aspect which i was missing in r-r, because I was using the generator,
  // I pretty much never used functional components
import React from 'react';


const VideoDetail = ({video}) => {
  if(!video){
    return <div>Loading...</div>
  }

  const videoId = video.id.videoId
  const url = `https://www.youtube.com/embed/${videoId}`

  return (
    <div className="video detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail

// This will be a plain, functional component as it doesn't need to really interact with state
import React from 'react';
import VideoListItem from './video_list_item'

// Note that props needed to be passed through the video list function in order to work
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    // The key is used to maintain lists; a logical structure used to make things easier to render
    return <VideoListItem key={video.etag} video={video}/>
  })
  // well shit, even components use the className, a lot like react-rails
  // lol, as it turns out, this.props is in fact how class-based components handle props, a lot like r-r
  return(
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
}

export default VideoList

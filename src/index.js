import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyAETgxJVXH3kDDwbHc_FcrUj0mRxTTMDAE';



class App extends Component{
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    YTSearch({key:API_KEY, term:'surfing'}, (videos) => {
      // This is es6 magic which only works when the key and value are equal
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    // This is passing props to the child component in VideoList
    return(
      <div>
        <SearchBar/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos}
                   onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));

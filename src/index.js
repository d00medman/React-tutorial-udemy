import _ from 'lodash'
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

    this.videoSearch('surfing')
  }

  videoSearch(term){
    YTSearch({key:API_KEY, term:term}, (videos) => {
      // This is es6 magic which only works when the key and value are equal
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    // Lodash is great for throttling user input
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)

    return(
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                   videos={this.state.videos}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));

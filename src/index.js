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

    this.state = { videos: [] }

    YTSearch({key:API_KEY, term:'surfing'}, (videos) => {
      // This is es6 magic which only works when the key and value are equal
      this.setState({ videos })
    })
  }

  render() {
    // This is passing props to the child component in VideoList
    return(
      <div>
        <SearchBar/>
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));

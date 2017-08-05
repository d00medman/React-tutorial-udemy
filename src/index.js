import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAETgxJVXH3kDDwbHc_FcrUj0mRxTTMDAE';

const App = () => {
  return(
  <div>
    <SearchBar />
  </div>
  )
}

// Instances of components called with jsx tags
ReactDOM.render(<App/>, document.querySelector('.container'));

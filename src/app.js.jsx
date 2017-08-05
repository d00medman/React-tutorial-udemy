import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <div>Hello World!</div>;
}

// Instances of components called with jsx tags
ReactDOM.render(<App/>, document.querySelector('.container'));

import React, { Component } from 'react';

// This is a class based component, rather than simply being rendered by a function
// class based components extend react components
class SearchBar extends Component {
  // Note the curly braces, which are how jsx handles variables
  render() {
    return <input onChange={event => console.log(event.target.value)}/>
  }

}

export default SearchBar;

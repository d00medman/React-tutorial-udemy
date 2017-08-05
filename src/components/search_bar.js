import React, { Component } from 'react';

// This is a class based component, rather than simply being rendered by a function
// class based components extend react components
class SearchBar extends Component {
  // Each component has its own state, and its changes re-render a component and all child
  // components. State is set in the constructor
  constructor(props){
    // this super method allows a component to inherit all the props of its parent component
    super(props);

    this.state = { term: ''};
  }
  // Note the curly braces, which are how jsx handles variables
  render() {
    return <input onChange={event => console.log(event.target.value)}/>
  }

}



export default SearchBar;

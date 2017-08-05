import React, { Component } from 'react';

// This is a class based component, rather than simply being rendered by a function
// class based components extend react components
class SearchBar extends Component {
  // Each component has its own state, and its changes re-render a component and all child
  // components. State is set in the constructor
  constructor(props){
    // this super method allows a component to inherit all the props of its parent component
    super(props);

    // It is only in the constructor function that state is manipulated along these lines
    this.state = { term: ''};
  }
  // Note the curly braces, which are how jsx handles variables
  // Worth noting that the setState/state management method in react is nigh identical to that in react-rails
  // The fact that the value is set by state means only the state changes can effect the form.
    // Sort of realized this in my work w/react-rails. If you're setting the value in state, you also need to have
    // the input event update the state. This is broadly how data is manipulated in data
  render() {
    return (
      <div className="search-bar">
        <input value={this.state.term}
               onChange={event => this.onInputChange(event.target.value)}/>
      </div>
    )
  }

  onInputChange(term){
    console.log(term)
    this.setState({term})
    this.props.onSearchTermChange(term)
  }

}



export default SearchBar;

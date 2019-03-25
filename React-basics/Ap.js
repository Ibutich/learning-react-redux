import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    name: 'Ian',
    age: 23
  }
//use arrow function to bind this.state manually to our method to avoid errors in order to access state in our methods as below
  handleClick = (e) => {
    //console.log(e.target);
    //Updating/changing state using this.setState({}) function when the click me button is clicked.
    this.setState({
      name: 'Irene',
      age: 21
    });
    console.log(this.state);

  }

  handleMouseOver = (e) => {
    console.log(e);
  }

  handleCopy = (e) => {
    console.log('Try being Original');
  }
//Changing state when the user enters the input to the input field
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
//When the form is submitted the deault action is to refresh the page now i want to prevent that default behavior
  handleSubmit = (e) => {
    e.preventDefault(); //Preventing the page from being refreshed on submit
    console.log('form submitted',this.state.name);
  }

  render() {
    return (
      <div className="App">
         <h1>I love React</h1>
         <p>My name is, { this.state.name } and I am {this.state.age} years old</p>

         <form onSubmit={this.handleSubmit}>
           <input type="text" onChange = { this.handleChange } />
           <button>Submit</button>
         </form>
         <button onClick={this.handleClick}>Click Me</button>
         <button onMouseOver={this.handleMouseOver}>Hover Me</button>
         <p onCopy = { this.handleCopy }>As a man thinkes so he is.</p>

      </div>
    );
  }
}

export default App;

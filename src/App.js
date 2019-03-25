import React, { Component } from 'react';
import Ian from './Ian';
import AddIan from './AddIan';

class App extends Component {
  state = {
    ian: [
      {name:'Ian', age: 24, nationality: 'Keyan', id: 1},
      {name:'Loftus', age: 20, nationality: 'England', id: 2},
      {name:'Kante', age: 27, nationality: 'France', id: 3}
    ]
  }
  addIan = (ian) =>{
    ians.id = Math.random();
    let ian = [...this.state.ian, ians];
    this.setState({
      ian: ian
    })
  }
  render() {
    return (
      <div className="App">
         <h1>Hello React</h1>
         <Ian ian={this.state.ian} />
         <AddIan addIan ={this.addIan}/>
      </div>
    );
  }
}

export default App;

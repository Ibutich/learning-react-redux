import React, { Component } from 'react';

class AddIan extends Component {
    state = {
        name: null,
        age: null,
        nationality: null
    }

    handleChange = (e) =>{
        this.setState({
           [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) =>{
       e.preventDefault();
       this.props.addIan(this.state);
    }

    render(){
        return(
            <div>
             <form onSubmit={this.handleSubmit}>
                 <label htmlFor="name">Name:</label>
                 <input type="text" id="name" onChange={this.handleChange}/>
                 <label htmlFor="age">Age:</label>
                 <input type="text" id="age" onChange={this.handleChange}/>
                 <label htmlFor="nationality">Nationality:</label>
                 <input type="text" id="nationality" onChange={this.handleChange}/>
                 <button>Submit</button>
             </form>
            </div>
        )
    }

}
export default AddIan;
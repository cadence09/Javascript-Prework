import React from 'react';

class AddUsers extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
   {console.log(this.state.value)};
   {console.log("what is this.refs",this.refs.username.value)}
    event.preventDefault();
    fetch('/users', { 
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify({"username":this.refs.username.value})
    
    })
    .then(function(response) {
      return response.json()
    }).then(function(body) {
      console.log(body);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <h1> Add Users</h1>
          <input type="text" value={this.state.value} onChange={this.handleChange} name="username" ref="username"/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

  export default AddUsers;
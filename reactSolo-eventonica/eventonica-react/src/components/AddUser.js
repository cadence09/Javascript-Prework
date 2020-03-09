import React from 'react';

class AddUsers extends React.Component{
    constructor(props){
      super(props);
      this.state={
        username:''
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
    // componentDidMount() {
    //     e.preventDefault();
    //     const requestOptions={
    //         method:'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //     };
    //   fetch('/users', requestOptions)
    //     .then(res=> res.json())
    //     .then((users) => this.setState({ users }));
    // }
    
    handleChange(event) {
        this.setState({ username: event.target.value })
      }
    
      handleSubmit(event) {
        // alert(this.state.username)
        event.preventDefault();
        const requestOptions={
                    method:'POST',
                    headers: { 'Content-Type': 'application/json' },
                };
              fetch('/users', requestOptions)
                .then(res=> res.json())
                .then((users) => this.setState({ users }));
      }
    
   
    render() {
      return (
        <div>
         
          {/* Add users */}
            <h1>Add Users</h1>
            <form onSubmit={this.handleSubmit}>
                <label>Username</label>
                <input value={this.state.username} placeholder="add your username here" type="text" onChange={this.handleChange}/><br/>
                <button>Submit</button>
                {console.log(this.state.username)}
            </form>
                
        </div>
      );
    }
  }

  export default AddUsers;
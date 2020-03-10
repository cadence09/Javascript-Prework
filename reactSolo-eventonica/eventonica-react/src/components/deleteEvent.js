import React from 'react';


class DeleteEvent extends React.Component{
    constructor(props){
        super(props);
        this.state={
          deleteValue:" "
        }
        this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({deleteValue: event.target.value});
    }

    handleSubmit(e){
      {console.log("what is deleteValue",this.state.deleteValue)};
      {console.log("what is this.refs for id",this.refs.id.value)};
      e.preventDefault();
  
      fetch('/deleteEvent', { 
        method: 'DELETE',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify({"id":this.refs.id.value})
      
      })
      .then(function(response) {
        return response.json()
      }).then(function(body) {
        console.log(body);
      });
    }
    render(){
    
      return(
        <form onSubmit={this.handleSubmit}>
        <label>
          <h1> Delete Event</h1>
          <input type="text" value={this.state.deleteValue} placeholder="event id" onChange={this.handleChange} name="id" ref="id"/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      )
    }
    
  }

export default DeleteEvent;
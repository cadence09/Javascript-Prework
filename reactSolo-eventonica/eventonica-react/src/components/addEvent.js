import React from "react";

class AddEvents extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
          name: '',
          date:'',
          category:'',
          keyword:''
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleDateChange=this.handleDateChange.bind(this);
      this.handleCatChange=this.handleCatChange.bind(this);
      this.handleKeyChange=this.handleKeyChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({
          name: event.target.value,
          
        });
    }
    handleDateChange(event) {
        this.setState({
           
            date: event.target.value,
            
          });
      }
      handleCatChange(event) {
        this.setState({
           
            category:event.target.value,
           
          });
      }
      handleKeyChange(event) {
        this.setState({
            keyword:event.target.value
          });
      }
  
    handleSubmit(event) {
     {console.log(this.state.name,this.state.date,this.state.category,this.state.keyword)};
     {console.log("what is this.refs",this.refs.eventName.value,this.refs.eventDate.value,this.refs.eventKeyword.value,this.refs.eventCategory.value)}
    // this.refs.eventDate.value,this.refs.eventKeyword.keyword.value,this.refs.eventCategory.category.value
      event.preventDefault();
      fetch('/events', { 
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify({"eventName":this.refs.eventName.value,
                    "eventDate":this.refs.eventDate.value,
                    "eventCategory":this.refs.eventKeyword.value,
                    "eventKeyword":this.refs.eventCategory.value

    })
      
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
          
            <h1> Add Users</h1>
            <label>
            Event Name:
            <input type="text" value={this.state.name} onChange={this.handleChange} name="eventName" ref="eventName"/><br/>
            </label>
            <label>
            Event date:
            <input type="text" value={this.state.date} onChange={this.handleDateChange} name="eventDate" ref="eventDate"/><br/>
            </label>
            <label>
            Event category:
            <input type="text" value={this.state.category} onChange={this.handleCatChange} name="eventCategory" ref="eventCategory"/><br/>
            </label>
            <label>
            Event keyword
            <input type="text" value={this.state.keyword} onChange={this.handleKeyChange} name="eventKeyword" ref="eventKeyword"/><br/>
            </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default AddEvents
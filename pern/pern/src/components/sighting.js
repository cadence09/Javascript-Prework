import React from 'react';

class Sighting extends React.Component{
    constructor(props){
    super(props);
    this.state={
        animalId:'',
        individual:'',
        location:'',
        healthCondition:'',
        email:''
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSeenChange=this.handleSeenChange.bind(this);
    this.handleLocationChange=this.handleLocationChange.bind(this);
    this.handleHealthChange=this.handleHealthChange.bind(this);
    this.handleEmailChange=this.handleEmailChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    
    }

    handleChange(e){
        this.setState({animalId:e.target.value});
    }
    handleSeenChange(e){
        this.setState({individual:e.target.value});
    }
    handleLocationChange(e){
        this.setState({location:e.target.value});
    }
    handleHealthChange(e){
        this.setState({healthCondition:e.target.value});
    }
    handleEmailChange(e){
        this.setState({email:e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        {console.log(this.state.animalId)}
        fetch('/addSigthing',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({"id":this.refs.id.value,
                    "seen":this.refs.seen.value,
                    "location": this.refs.location.value,
                    "health":this.refs.health.value,
                    "email":this.refs.email.value

        })
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Animal Id:
                        <input type="text" value={this.state.animalId} onChange={this.handleChange} name="id" ref="id"></input>
                       
                    </label>
                    <label>
                        Indivdual Seen:
                        <input type="text" value={this.state.individual} onChange={this.handleSeenChange} name="seen" ref="seen"></input>
                    </label>
                    <label>
                        Location:
                        <input type="text" value={this.state.location} onChange={this.handleLocationChange} name="location" ref="location"></input>
                    </label>
                    <label>
                        Health Codition:
                        <input type="text" value={this.state.healthCondition} onChange={this.handleHealthChange} name="health" ref="health"></input>
                    </label>
                    <label>
                        Email:
                        <input type="text" value={this.state.email} onChange={this.handleEmailChange} name="email" ref="email"></input>
                    </label>
                    <input type="Submit"></input>
                </form>
            </div>
        )
    }
}

export default Sighting;
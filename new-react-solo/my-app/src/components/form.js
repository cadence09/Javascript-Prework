import React from 'react';
import './form.css';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={value:""};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
     
    }
    handleChange(event){
        this.setState({value: event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();

    }
    render(){
        const message =this.state.value;
        const wordCount=100;
        const wordCountLength=message.length;
        return (
        <div>
            <h1>Tweeter</h1>
          <form onSubmit ={this.handleSubmit}>
              <lable>
                  Type your message:<br/>
                 <textarea value={message} onChange={this.handleChange}></textarea>
              </lable>
              <div className="wordCount">
                  count:{wordCountLength}
              </div>
              <br/>
              <input type="submit" value="submit"></input>
          </form>
          </div>
        )
    }

}

export default Form;
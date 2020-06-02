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
        const wordCount=10;
        const wordCountLength=message.length;
        let wordLeft=wordCount-wordCountLength;
        const tooManyCharStyle = {color: "red"};
        // const goodToGo = {color: "green"};
        return (
        <div>
            <h1>Tweeter</h1>
          <form onSubmit ={this.handleSubmit}>
              <lable>
                  Type your message:<br/>
                 <textarea value={message} onChange={this.handleChange}></textarea>
              </lable>
              <div className="wordCount">
                  count:{wordLeft}
                  {message.length <0 ? "Over Limit": "good to GO"}

                
              </div>
              <br/>
              <input type="submit" value="submit"></input>
          </form>
          </div>
        )
    }

}

export default Form;
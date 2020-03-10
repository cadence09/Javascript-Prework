import React from 'react';
import AddEvents from './addEvent';
import DeleteEvent from './deleteEvent'

class Event extends React.Component{
    constructor(props){
      super(props);
      this.state={
        events:[],
       
      }
    }
    componentDidMount() {
      fetch('/getAllEvents')
        .then(res=> res.json())
        .then((events) => this.setState({ events}));
    }
    
   
    render() {
      return (
        <div className="event">
          {/* show all users in database */}
            {this.state.events.map(event =>
                <div key={event.id}>event Name:{event.event_name}--Date:{event.event_date}--category:{event.event_category}---keyword:{event.event_keyword}</div>
            )}
            {console.log("what is this event",this.state.events)}
          {/* Add Event */}
           <AddEvents/>
         {/* Delete Event */}
         <DeleteEvent/>
                
        </div>
      );
    }
  }

  export default Event
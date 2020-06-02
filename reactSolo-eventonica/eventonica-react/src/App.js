import React from 'react';
import Users from './components/User';
import Event from './components/events';
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component{

  render() {
    return (
      <div className="App">
        <h1>Eventonica</h1>
          <div className="AllUsers">
            <h2 className="AllUsers-titile">All Users</h2>
              <Users/>
          </div>
              {/* ALL EVENTs */}
              <div className="AllEvents">
            <h2 className="AllEvents-title">All Events</h2>
                <Event/>
           </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import Species from './components/species';
import Animals from './components/animals';
import Sighting from './components/sighting';
import ListSightings from './components/listing';
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component{

  render() {
    return (
      <div className="App">
        <h1>Endanger Species</h1>
              <Species/>
        <div>
          <h1>Animal List</h1>
          <Animals/>
        </div>
          <div>
            {/* show all record */}
              <ListSightings/>
              {/* Sighting Form  */}
              <Sighting/>
          </div>
      </div>
             
     
    );
  }
}

export default App;

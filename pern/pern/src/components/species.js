import React from 'react';


class Species extends React.Component{
    constructor(props){
      super(props);
      this.state={
        species:[],
       
      }
    }
    componentDidMount() {
      fetch('/getSpecies')
        .then(res=> res.json())
        .then((species) => this.setState({ species}));
    }
    
   
    render() {
      return (
        <div className="App">
          {/* show all species in database */}
            {this.state.species.map(data =>
                <div key={data.id}>Species Name:{data.name}<br/>{data.number_living}-{data.status_code}-{data.date_record}</div>
            )}
          
        
        </div>
      );
    }
  }



  export default Species;
import React from 'react';

class ListSightings extends React.Component{
    constructor(props){
        super(props);
        this.state={list:[]}
    }
    componentDidMount(){
        fetch("/listSighting")
        .then(res=>res.json())
        .then(list=>this.setState({list}));
    }
    render(){
        return(
            <div>
              <h1> All Sighting Record</h1>
              <AllSightRecord/>
              <h1>Sighting List</h1>
            {this.state.list.map(data =>
                <div key={data.id}>Animal Id:{data.animal_id}-Individual Seen:{data.individual_seen}-Species:{data.species}<br/>Location:{data.location}-Health:{data.healthcondition}-Email:{data.email}</div>
            )}
            {console.log(this.state.list)}
            </div>
        )
    }
}

class AllSightRecord extends React.Component{
    constructor(props){
        super(props)
        this.state={allSightRecord:[]}

    }
    componentDidMount(){
        fetch("/getAllSightingRecord")
            .then(res=>res.json())
            .then(allSightRecord=>this.setState({allSightRecord}))
    }

    render(){
        return(
            <div>
                {/* {this.state.allSightRecord.map(data=>
                    <div key={data.id}>Animal Id:{data.animal_id}-Individual Seen:{data.individual_seen}<br/>Location:{data.location}-Health:{data.healthcondition}-Email:{data.email}</div>
                )} */}
                {/* {this.state.allSightRecord.map(data).filter} */}
            </div>
        )
    }
}
export default ListSightings;
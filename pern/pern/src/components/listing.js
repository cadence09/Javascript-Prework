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
                 {/* show all species in database */}
            {this.state.list.map(data =>
                <div key={data.id}>Animal Id:{data.animal_id}-Individual Seen:{data.individual_seen}-Species:{data.species}<br/>Location:{data.location}-Health:{data.healthcondition}-Email:{data.email}</div>
            )}
            {console.log(this.state.list)}
            </div>
        )
    }
}

export default ListSightings;
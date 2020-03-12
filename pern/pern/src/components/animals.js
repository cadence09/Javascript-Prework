import React from 'react';

class Animals extends React.Component{
    constructor(props){
        super(props);
        this.state={animals:[]}
    }
    componentDidMount(){
        fetch("/getAnimals")
            .then(res=>res.json())
            .then(animals=>this.setState({animals}))
    }
    render(){
        return(
            <div>
                
                {this.state.animals.map(data=>
                    <div key={data.id}>Id:{data.animals_id}-Name:{data.nickname}-Species:{data.species}-Date:{data.date_record}</div>
    )}
            </div>
        )
    }
}

export default Animals;
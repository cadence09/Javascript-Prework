import React from 'react';
import AddUser from './AddUser';

class Users extends React.Component{
    constructor(props){
      super(props);
      this.state={
        users:[],
       
      }
    }
    componentDidMount() {
      fetch('/getAllUsers')
        .then(res=> res.json())
        .then((users) => this.setState({ users }));
    }
    
   
    render() {
      return (
        <div className="App">
          {/* show all users in database */}
            {this.state.users.map(user =>
                <div key={user.id}>{user.user_name}</div>
            )}
          {/* Add users */}
            <AddUser />
                
        </div>
      );
    }
  }

  export default Users;
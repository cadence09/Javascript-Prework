import React from 'react';
import AddUser from './AddUser';
import DeleteUser from './deteletUser';

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
            {console.log("what is this users",this.state.users)}
          {/* Add users */}
            <AddUser />
         {/* Delete User */}
                <DeleteUser/>
        </div>
      );
    }
  }



  export default Users;
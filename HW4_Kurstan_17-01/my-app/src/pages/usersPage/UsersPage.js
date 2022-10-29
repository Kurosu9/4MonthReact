import React from "react";
import {User} from "../../components/user/User";




class UsersPage extends React.Component {
    
    constructor(props) {
        super()
        this.state = {users: []}
    }
    
    getUsers = () => {
        this.setState({
            users: ["Dastan", "Sanjar", "Anna"]
        })
    }

    render() {
        return (
            <>
                <h1>Users</h1>
                <button onClick={this.getUsers}>get users</button>
                {
                    this.state.users.map(user => <User userInfo={user}/>)
                }
            </>
        )
    }
}

export default UsersPage;
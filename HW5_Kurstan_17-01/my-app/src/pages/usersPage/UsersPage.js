import React from "react";
import UsersList from "../../components/usersList/UsersList";




class UsersPage extends React.Component {

    constructor(props) {
        super()
        this.state = {users: []}
    }


    getUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => this.setState({users: data}))
    }

    getUserInfo = (e) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${e.target.dataset.id}`)
        .then(response => response.json())
        .then(data => console.log(data)) 
    }

    render() {
        return (
            <>
                <h1>Users page</h1>
                <button onClick={this.getUsers}>Get Users</button>
                <UsersList
                users={this.state.users}
                getUserInfo={this.getUserInfo}/>
            </>
        )
    }
}

export default UsersPage;
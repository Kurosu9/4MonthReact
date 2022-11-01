import React from "react"




class AboutPage extends React.Component {

    constructor(props) {
        super()
        this.state = {users: []}
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => this.setState({users: data}))
    }
    
    render() {
        return (
            <>
                <h1>About page</h1>
                {
                    this.state.users.map(user => <p>{user.name}</p>)
                }
            </>
        )
    }
}

export default AboutPage;
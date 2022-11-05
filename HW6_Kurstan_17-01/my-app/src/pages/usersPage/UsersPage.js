import {useState} from "react"


function UsersPage() {
    const [users, setUsers] = useState([])

    const getUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setUsers(data))
    }

    return (
        <>
            <h1>users</h1>
            <button onClick={getUsers}>get users</button>
            {
                users.length > 0
                ?
                users.map(user => <p key={user.id}>{user.name}</p>)
                :
                <p>No data</p>
            }
        </>
    )
}

export default UsersPage;
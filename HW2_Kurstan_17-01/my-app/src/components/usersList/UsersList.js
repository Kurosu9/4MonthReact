


function UserList(props) {
    console.log(props.namesList);
    return (
        <ul>
            {
                props.namesList.map(user => <li>{user}</li>)
            }
        </ul>
    )
}

export default UserList;
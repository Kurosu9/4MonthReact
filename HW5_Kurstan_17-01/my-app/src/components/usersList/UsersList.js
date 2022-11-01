




function UsersList(props) {
    return (
        <ul>
            {props.users.map(user => <li>
                <h4>{user.name}</h4>
                <button data-id={user.id} onClick={props.getUserInfo}>Look</button>
            </li>)}
        </ul>
    )
}

export default UsersList;
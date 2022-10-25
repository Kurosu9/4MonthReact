


function UserList(props) {
    return (
        <ul>
            <li>{props.userInfo.name}</li>
            <li>{props.userInfo.age}</li>
        </ul>
    )
}

export default UserList;
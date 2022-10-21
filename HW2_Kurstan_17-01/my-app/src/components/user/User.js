


function User(props) {
    console.log(props);
    return (
        <>
            <p>name: {props.userInfo.name}</p>
            <p>lastanme: {props.userInfo.lastname}</p>
            <p>age: {props.userInfo.age}</p>
        </>
    )
}

export default User;
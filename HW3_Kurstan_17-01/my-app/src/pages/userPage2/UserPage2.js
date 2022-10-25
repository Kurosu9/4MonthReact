import UserList from "../../components/userList/UserList";
import classes from "./userPage2.module.css";


function UserPage2() {

    const user = {
        name: "Anna",
        age: "19"
    }

    return (
        <>
            <h1 className={classes.title}><UserList userInfo={user}/></h1>
        </>
    )
}

export default UserPage2;
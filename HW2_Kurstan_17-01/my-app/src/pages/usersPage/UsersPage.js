import User from "../../components/user/User";
import UserList from "../../components/usersList/UsersList";



function UsersPage() {

    const user = {
        name: "Kurstan",
        lastname: "Abazbekov",
        age: 19,
    }

    const names = ["Aalam", "Adilet", "Erkutbek"];

    return (
        <>
            <h1>Users list</h1>
            <User userInfo={user}/>
            ---------------------------
            <UserList namesList={names}/>
        </>
    )
}

export default UsersPage;
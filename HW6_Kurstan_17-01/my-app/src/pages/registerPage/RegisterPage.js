import {useState} from "react";




function RegisterPage() {

    const [infoUser, setInfoUser] = useState({
        username: "",
        email: "",
        age: 0
    })

    const changeInput = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        setInfoUser({
            ...infoUser,
            [e.target.name]: e.target.value
        })
    }

    const registerUser = () => {
        console.log(infoUser);
        infoUser.username.trim() === "" || infoUser.email.trim() === "" || infoUser.age === 0
        ?
        alert("Please fill the form!")
        :
        alert("Success")
        clearInput()
    }

    const clearInput = () => {
        setInfoUser({
            username: "",
            email: "",
            age: 0
        })
    }

    return (
        <>
            <input
                type="text"
                placeholder="username"
                name="username"
                onChange={changeInput}
                value={infoUser.username}
                />
            
            <input
                type="text"
                placeholder="email"
                name="email"
                onChange={changeInput}
                value={infoUser.email}
                />
            
            <input
                type="number"
                placeholder="age"
                name="age"
                onChange={changeInput}
                value={infoUser.age}
                />
            
            <button onClick={registerUser}>register user</button>
            <button onClick={clearInput}>Clear all</button>
        </>
    )
}

// const obj1 = {
//     name: "Dastan",
//     age: 26
// }

// const obj2 = {
//     ...obj1,
//     position: "font end"
// }

// console.log();

// const user = {
//     name: "Dastan",
//     age: 26
// }

// console.log(user.name);
// console.log(user["name"]);

export default RegisterPage;
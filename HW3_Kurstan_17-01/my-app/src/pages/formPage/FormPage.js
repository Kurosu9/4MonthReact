



function FormPage() {

    const sayHello = () => {
        alert("hello world");
    }

    const doubleClick = () => {
        alert("hello world double");
    }

    const changeInput = event => {
        console.log(event.target.value);
    }

    const submit = e => {
        e.preventDefault();
        console.log("complete");
    }


    return (
        <>
            <input type="text" placeholder="name" onChange={changeInput}/>
            <input type="text" placeholder="name blur" onBlur={changeInput}/>
            <button onClick={sayHello}>say hello</button>
            <button onDoubleClick={doubleClick}>say hello double</button>
            <h1>------------------------------</h1>
            <form onSubmit={submit}>
                <input type="text" onChange={changeInput}/>
                <input type="text" onChange={changeInput}/>
                <button type="submit">register user</button>
            </form>
        </>
    )
}

export default FormPage;
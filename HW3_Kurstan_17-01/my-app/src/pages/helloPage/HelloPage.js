


function HelloPage() {

    const sayHello = () => {
        alert("Hello World!!!");
    }

    return (
        <>
            <button onClick={sayHello}>Say hello!</button>
        </>
    )
}


export default HelloPage;
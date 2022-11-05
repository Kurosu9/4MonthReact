




function Menu({status}) {
    return (
        <ul className={status ? "activeMenu" : "hiddenMenu"}>
            <li>main page</li>
            <li>count page</li>
            <li>about page</li>
        </ul>
    )
}

export default Menu
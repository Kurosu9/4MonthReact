import {Link} from "react-router-dom";




function Menu() {
    return (
        <ul>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/main">Main</Link>
            </li>
            <li>
                <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
            <li>
                <Link to="/video">Video</Link>
            </li>
        </ul>
    )
}

export default Menu;
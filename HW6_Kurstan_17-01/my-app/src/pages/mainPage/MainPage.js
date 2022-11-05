import {useState} from "react";
import Menu from "../../components/menu/Menu";



function MainPage() {

    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu)
    }

    return (
        <>
            <button onClick={handleMenu}>menu</button>
            {
                // menu && <Menu/>

                // menu === true
                // ?
                // <Menu/>
                // :
                // ""
 
                <Menu status={menu}/>
            }
        </>
    )
}

export default MainPage;
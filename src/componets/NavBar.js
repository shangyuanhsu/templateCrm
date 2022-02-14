import './css/NavBar.css';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';
import { Nav } from "../contexts/Nav";
import { useContext, useState } from 'react';

const NavBar = () => {
    const { showHam } = useContext(Nav);
    // menu
    const [menu, setmenu] = useState([
        { title: "Dashboard", icon: "home", checked: true, url: "/" },
        { title: "Set Dashboard", icon: "dashboard_customize", checked: false, url: "/setDashboard" },
        { title: "Member", icon: "face", checked: false, url: "/member" },
        { title: "Products", icon: "shopping_bag", checked: false, url: "/product" },
    ]);
    // click menu change checked(classname)
    const changeMenu = (index) => {
        setmenu(menu.map((item, num) => {
            if (num === index) {
                item.checked = true;
            } else {
                item.checked = false;
            }
            return item
        }));
    }
    return (
        <div className={showHam ? 'navBar navBar_show' : 'navBar'}>
            <div>
                <div className='logo'>
                    <img src={logo} alt="react CRM Logo" />
                </div>

                <nav>
                    <ul>
                        {menu.map((element, index) => {
                            return (
                                <li className={element.checked ? "checked" : ""} onClick={() => { changeMenu(index) }} key={index}>
                                    <Link to={element.url}>
                                        <span className="material-icons">
                                            {element.icon}
                                        </span>
                                        <span> {element.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
            <p className='copyright'>shang @ 2022</p>

        </div>
    );
}

export default NavBar;
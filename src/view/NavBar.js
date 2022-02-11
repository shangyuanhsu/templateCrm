import './css/NavBar.css';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div className="navBar">
            <div className='logo'>
                <img src={logo} />
            </div>
            <nav>
                <ul>
                    <li className='ckecked'>
                        <Link to='/'>
                            <span className="material-icons">
                                dashboard
                            </span>
                            <span>Dashboard</span> </Link>
                    </li>

                    <li>
                        <Link to='/setDashboard'>
                            <span className="material-icons">
                                dashboard_customize
                            </span>
                            <span> Set Dashboard</span> </Link>
                    </li>
                    <li>
                        <Link to='/member'>
                            <span className="material-icons">
                                face
                            </span>
                            <span>Member</span> </Link>
                    </li>
                    <li>
                        <Link to='/product'>
                            <span className="material-icons">
                                shopping_bag
                            </span>
                            <span>Products</span> </Link>
                    </li>

                </ul>
            </nav>

        </div>
    );
}

export default NavBar;
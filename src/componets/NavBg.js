import './css/NavBar.css';
import { Nav } from "../contexts/Nav";
import { useContext } from 'react';

const NavBg = () => {
    const { showHam,changeHam } = useContext(Nav);
    // hamburger menu
    const changeNavHam = () =>{
        changeHam();
    }
    return (

        <div  className={showHam ? 'NavBg NavBg_show' : 'NavBg'} onClick={changeNavHam}></div>
    );
}

export default NavBg;
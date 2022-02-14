import { createContext, useState, useEffect } from "react";
export const Nav = createContext();

const NavProvider = (props) => {
    const [showHam, setShowHam] = useState(false);//有沒有點開hamburger menu

    useEffect(() => {
        // 預設不會有hamburger menu
        window.addEventListener("resize", function () {
            this.window.innerWidth > 796 ? setShowHam(false) : setShowHam(false);
        })
    }, []);

    // hamburger menu 點開關閉
    const changeHam = () => {
        setShowHam(!showHam);
    }
    return (
        <Nav.Provider value={{ changeHam: changeHam, showHam: showHam }}>
            {props.children}
        </Nav.Provider>
    );

}

export default NavProvider;




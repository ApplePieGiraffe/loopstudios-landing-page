import { useState } from 'react';

function HamburgerMenu() {
    let [active, setActive] = useState(false);

    function toggleActive() {
        if (active === false) {
            setActive(true);
            document.body.style.overflowY = 'hidden';
        } else {
            setActive(false);
            document.body.style.overflowY = 'initial';
        }
    };

    return (
        <div className={`hamburger-menu ${active ? "hamburger-menu--active" : ""}`} onClick={ toggleActive }>
            <div className="hamburger-menu__bar hamburger-menu__bar--1"></div>
            <div className="hamburger-menu__bar hamburger-menu__bar--2"></div>
            <div className="hamburger-menu__bar hamburger-menu__bar--3"></div>
        </div>
    )
}

export default HamburgerMenu;
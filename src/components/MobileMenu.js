import { useState } from 'react';

import HamburgerMenu from './HamburgerMenu';

function MobileMenu() {
    let [active, setActive] = useState(false);

    function toggleActive() {
        console.log('clicked');
        if (active === false) {
            setActive(true);
        } else {
            setActive(false);
        }
    };

    return (
        <div>
            <div className="hamburger-menu-wrapper" onClick={toggleActive}><HamburgerMenu /></div>
            <div className={`mobile-menu__bg ${active ? "mobile-menu__bg--active" : ""}`}>
                <nav className="mobile-menu__nav">
                    <ul className="mobile-menu__links">
                        <li className="mobile-menu__link"><a href=".">About</a></li>
                        <li className="mobile-menu__link"><a href=".">Careers</a></li>
                        <li className="mobile-menu__link"><a href=".">Events</a></li>
                        <li className="mobile-menu__link"><a href=".">Products</a></li>
                        <li className="mobile-menu__link"><a href=".">Support</a></li>
                    </ul>
                </nav>
            </div>
        </div> 
    );
}

export default MobileMenu;
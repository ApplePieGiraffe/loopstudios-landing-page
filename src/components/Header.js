import { useState, useEffect } from 'react';

import DesktopMenu from './shared/DesktopMenu';
import MobileMenu from './shared/MobileMenu';

function Header() {
    let [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth));
    });

    return (
        <header className="header">
            <div className="content-wrapper header__content-wrapper">
                <a className="header__logo-link" href=".">
                    <img className="header__logo" src="./img/shared/logo.svg" alt="Loopstudio's logo"/>
                </a>
                { width <= 699 ? <MobileMenu /> : <DesktopMenu /> }
            </div>
        </header>
    )
}

export default Header;

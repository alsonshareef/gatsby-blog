import React from 'react';
import { Link } from 'gatsby';

import headerStyles from './Header.module.scss';

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <nav>
                <h1>
                    <Link className={headerStyles.title} to="/">
                        Alson Shareef
                    </Link>
                </h1>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.navItemActive}
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.navItemActive}
                            to="/about"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.navItemActive}
                            to="/blog"
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.navItemActive}
                            to="/contact"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

import React from 'react';
import '../../styles/index.scss';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = props => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
};

export default Layout;

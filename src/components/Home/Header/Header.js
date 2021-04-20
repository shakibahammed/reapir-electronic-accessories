import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../../SharedComponents/Navbar/Navbar';

const Header = () => {
    return (
        <div>
           <Navbar></Navbar>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;
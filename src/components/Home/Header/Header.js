import React from 'react';
import './Header.css'
import HeaderInfo from '../HeaderInfo/HeaderInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../../Shared/Navbar/Navbar';

const Header = () => {
    return (
        <div className="header-body">  
                <Navbar></Navbar>
               <div className="container">
                    <HeaderMain></HeaderMain>
               </div>
                <HeaderInfo></HeaderInfo>
           </div>
    );
};

export default Header;
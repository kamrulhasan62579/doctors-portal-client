import React from 'react';
import Contact from '../../Home/Contact/Contact';
import SideBar from '../SideBar/SideBar';

const Settings = () => {
    return (
        <div className="row w-100">
            <div className="col-md-3">
                <SideBar></SideBar>
            </div>
            <div className="col-md-9">
            <Contact></Contact>          
            </div>
        </div>
    );
};

export default Settings;
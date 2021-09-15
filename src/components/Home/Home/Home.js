import React from 'react';
import './Home.css'
import Header from '../Header/Header';
import Services from '../Services/Services';
import NeonLight from '../NeonLight/NeonLight';
import ExceptionalCare from '../ExceptionalCare/ExceptionalCare';
import Appointment from '../Appointment/Appointment';
import Testimonal from '../Testimonal/Testimonal';
import Doctor from '../Doctor/Doctor';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header> 
            <div className="spacing">
            </div>
             <div className="media-spaceing">
            </div>
            <Services></Services>
             <div className="spacing">
            </div>
            <ExceptionalCare></ExceptionalCare>
             <div className="spacing">
            </div>
            <Appointment></Appointment>
             <div className="spacing">
            </div>
            <Testimonal></Testimonal>
            <div className="spacing">
            </div>
            <Doctor></Doctor>
            <div className="spacing">
            </div>
             <Contact ></Contact>
             {/* <div className="spacing">
             </div> */}
             <Footer></Footer>
        </div>
    );
};

export default Home;
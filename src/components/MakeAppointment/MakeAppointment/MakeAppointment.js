import React, { useState } from 'react';
import './MakeAppointment.css'
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const MakeAppointment = () => {
  const [dateState, setDateState] = useState(null);
  const changeDate = (e) => {
    setDateState(e)
  }
    return (
        <div className="makeAppointment-body">
            <Navbar></Navbar>
            <AppointmentHeader dateState={dateState} changeDate={changeDate}></AppointmentHeader>
            <BookAppointment dateState={dateState}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default MakeAppointment;
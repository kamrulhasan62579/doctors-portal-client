import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import moment from 'moment'

import chair from '../../../images/chair.png'

const AppointmentHeader = ({changeDate, dateState}) => {


    return (
        <div className="d-flex justify-content-center">
            <main style={{height: "670px", width:"100%"}}  className="row container align-items-center">
            <div className="col-md-6 col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6 ">
                 <h1 style={{color: "rgb(58,66,66)"}}>Appointment</h1>
                 <h5>Select a date for your appointment :</h5>
                 <Calendar value={dateState} onChange={changeDate}/>
            </div>
            <div className="col-md-6 col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6 ">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
          </main>
        </div>
    );
};

export default AppointmentHeader;
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import doctor from '../../../images/5790-removebg.png'
import './Appointment.css'

const Appointment = () => {
    const history = useHistory();
    const handlePush = () =>{
        history.push("/makeAppointment")
    }
    return (
            <div className="bac">
                <div className="row w-100 text-light align-items-center h-75">
                <div className="col-md-5 col-sm-6 col-lg-5 col-xl-5 col-xxl-5 col-12 offset-md-1 doctor ">
                    <img src={doctor} alt="" className="img-fluid doctor-img"/>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6 col-sm-6 col-12 p-3">
                    <h5 style={{color: "#12D0DA"}}>APPOINTMENT</h5>
                    <h1 >Make An Appointment <br/> Today</h1>
                    <p className="fs-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus veniam recusandae, facere tempora doloribus odio.</p>
                    <div onClick={handlePush}  className="btn btn-success">Learn more...</div>
                </div>
          </div>
            </div>
    );
};

export default Appointment;
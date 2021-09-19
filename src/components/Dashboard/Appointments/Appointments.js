import React, { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import { useHistory } from "react-router-dom";
import Spinner from "react-spinner-material";
import { UserContext } from "../../../App";
import AppointmentByDate from "../ApponitmentByDate/AppointmentByDate";
import SideBar from "../SideBar/SideBar";
import "./Appointment.css"

const Appointments = () => {
  const [byDate, setByDate] = useState([]);
  console.log(byDate);
  const [value, setValue] = useState(null);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  console.log(value);
  const changeDate = e => {
    setValue(e);
  };
  useEffect(
    () => {
      fetch("https://pacific-savannah-02402.herokuapp.com/appointmentByDate", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ date: value, email:  loggedInUser.email}),
      })
        .then(res => res.json())
        .then(appointments => setByDate(appointments));
    },
    [value]
  );
  const history = useHistory();
  const handleClick = () => {
      history.push('/makeAppointment')
  }
  return (
    <div>
      <div className="row w-100 m-0">
        <div className="col-12 col-sm-12 col-md-3 col-xl-3 col-lg-3 col-xxl-3">
          <SideBar />
        </div>
         <div className="col-12 col-sm-12 col-md-9 col-xl-9 col-lg-9 col-xxl-9 row  m-0">
             <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
              <h3 className="p-3 mt-3">Appointments</h3>
              <div className="d-flex justify-content-center">
                <Calendar onChange={changeDate} value={value} />
              </div> <br/>
            <div className="d-flex justify-content-center "> 
                <div>
                   <p>For New appointment you can visit this link below</p> 
                    <button onClick={handleClick} className="btn btn-success special-btn">
                     GET APPOINTMENT
                   </button>
                </div>
              </div>
            </div>
            <div className="mt-5 pb-5 col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
              {value ? (
                <h4 style={{ color: "Green" }}>
                  Appointments of {new Date(value).toDateString()}
                </h4>
              ) : (
                <h5>Please select a date to see your appointment</h5>
              )}
              {
                byDate.length === 0?
                  <div className="col-md-9 mt-5 d-flex align-items-center justify-content-center">
                    <h4>No Appointment Available</h4>
                  </div>
                  :
                   <div className="">
                    <AppointmentByDate appointments={byDate}/>
                  </div>
              }
             
            </div>
         </div>
      </div>
    </div>
  );
};

export default Appointments;

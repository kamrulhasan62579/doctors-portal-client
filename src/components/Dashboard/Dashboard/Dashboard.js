import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import SideBar from "../SideBar/SideBar";
import TotalAppointments from "../TotalAppointments/TotalAppointments";
import './Dashboard.css'

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [appointments, setAppointments] = useState([])
  useEffect(() => {
    fetch('http://localhost:3010/appointment')
    .then(res => res.json())
    .then(data => setAppointments(data))
  }, [])
  return (
    <div className="row w-100">
      <div className="col-md-3 col-xxl-3">
        <SideBar />
      </div>
      <div className="col-md-9 col-xxl-9  ">
        <h5>Dashboard</h5>
          <div className="row m-1 text-center">
              <div className="col-md-3  pendingAppointments d-flex justify-content-around align-items-center">
                {/* <div className="num">Stay Home</div> */}
                <h6>Stay Home</h6>
              </div>
              <div className="col-md-3 todaysAppointments d-flex justify-content-around align-items-center">
                  <div className="num">{appointments.length}</div>
                  <h6>Pending Appointments</h6>
              </div>
              <div className="col-md-3  totalAppointments d-flex justify-content-around align-items-center">
                  <div className="num">{appointments.length}</div>
                  <h6>Total Appointments</h6>
              </div>
              <div className="col-md-3 totalPatients d-flex justify-content-around align-items-center">
                  {/* <div className="num">{loggedInUser.allPatientsLenght}</div> */}
                  <h6>Stay Safe</h6>
              </div>
          </div>
          <br/><br/>
          
          <div >
            <h5>Recent Appointments</h5>
              {
                appointments.length && <TotalAppointments appointments={appointments}></TotalAppointments>
              }
          </div>
      </div>
    </div>
  );
};

export default Dashboard;
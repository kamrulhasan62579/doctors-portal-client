import React from 'react';
import { Link, useHistory } from "react-router-dom";
import "./FancySideBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faPrescription, faFilePdf, faSignOutAlt, faPlusCircle, faHospitalUser, faColumns, faCalendarCheck} from '@fortawesome/free-solid-svg-icons'

const FancySideBar = ({handleClick, isDoctor}) => {


    const history = useHistory();
    const AppointmentsClick = () => {
        history.push("/appointments");
    }
    const dashboardClick = () => {
        history.push("/dashboard")
    }
    const allPatientsClick = () => {
        history.push("/allPatients")
    }
     const appointmentsClick = () => {
        history.push("/appointments")
    }
    const addDoctorClick = () => {
        history.push("/addDoctor")
    }
     const prescriptionsClick = () => {
        history.push("/prescriptions")
    }
    
    return (
        <div>
              <nav className="nav">
            <ol class="main-menu">
                {isDoctor ?
                   <div>
                        <li onClick={dashboardClick} class="li main-item"><span class="dashboard"></span></li>
                        <li class="main-item li"><span class="review"></span></li>
                        <li onClick={allPatientsClick} class="main-item li"><span class="allPatients"></span></li>
                        <li onClick={appointmentsClick} class="main-item li"><span class="appointments"></span></li>
                        <li onClick={addDoctorClick} class="main-item li"><span class="addDoctor"></span></li>
                        <li onClick={prescriptionsClick} class="main-item li"><span class="prescriptions"></span></li>
                   </div>
                :
                   <div>
                      <li onClick={AppointmentsClick} class="main-item li"><span class="appointments"></span></li>
                      <li class="main-item li"><span class="review"></span></li>
                  </div>
                }
                <li  onClick={handleClick} class="main-item li"><span class="contact">
                <a className="sidebar-link">Log Out</a>    
                </span></li>
            </ol>
            </nav>
        </div>
    );
};

export default FancySideBar;
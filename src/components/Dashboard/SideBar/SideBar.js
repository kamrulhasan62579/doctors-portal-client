import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faPrescription, faHospitalUser, faColumns, faCalendarCheck} from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {
  return (
    <div className="sidebar w-100">
      <ul className="pt-5">
        <li>
           <div className="sidebar-li">
               <FontAwesomeIcon icon={faColumns}/>  <Link className="sidebar-link" to="/dashboard">Dashboard</Link>
           </div>
        </li>
        <li>
         <div className="sidebar-li">
              <FontAwesomeIcon icon={faHospitalUser}/><Link className="sidebar-link" to="/allPatients">Patients</Link>
         </div>
        </li>
        <li>
          <div className="sidebar-li">
              <FontAwesomeIcon icon={faPrescription}/><Link className="sidebar-link" to="/prescriptions">Prescriptions</Link>
          </div>
        </li>
        <li>
          <div className="sidebar-li">
              <FontAwesomeIcon icon={faCalendarCheck}/><Link className="sidebar-link" to="/appointments">Appointments</Link>
          </div>
        </li>
        <li>
         <div className="sidebar-li">
              <FontAwesomeIcon icon={faCog}/><Link className="sidebar-link" to="/setting">Review</Link>
         </div>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;

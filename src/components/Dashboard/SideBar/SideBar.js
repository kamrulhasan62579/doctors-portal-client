import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faPrescription, faHospitalUser, faColumns, faCalendarCheck} from '@fortawesome/free-solid-svg-icons'
import { UserContext } from "../../../App";
import jwt_decode from "jwt-decode";


const SideBar = () => {
   const [isDoctor, setIsDoctor] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const decodedToken = jwt_decode(token);
    const userEmail = decodedToken.email;

     fetch(`https://pacific-savannah-02402.herokuapp.com/isdoctor/3?email=${userEmail}`)
     .then(res => res.json())
     .then(data=> setIsDoctor(data))

  }, [])

  return (
    <div className="sidebar w-100 m-0">

      <ul className="pt-5" id="links">
       {
         isDoctor? 
         <div>
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
              <FontAwesomeIcon icon={faPrescription}/><Link className="sidebar-link" to="/addDoctor">Add Doctor</Link>
          </div>
        </li>
        <li>
          <div className="sidebar-li">
              <FontAwesomeIcon icon={faCalendarCheck}/><Link className="sidebar-link" to="/appointments">Appointments</Link>
          </div>
        </li>
        <li>
         <div className="sidebar-li">
              <FontAwesomeIcon icon={faCog}/><Link className="sidebar-link" to="#">Review</Link>
         </div>
        </li>
         </div>
       :
        <div>
            <li>
          <div className="sidebar-li">
              <FontAwesomeIcon icon={faCalendarCheck}/><Link className="sidebar-link" to="/appointments">Appointments</Link>
          </div>
        </li>
        <li>
         <div className="sidebar-li">
              <FontAwesomeIcon icon={faCog}/><Link className="sidebar-link" to="#">Review</Link>
         </div>
        </li>
        </div>

       }
      </ul>
    </div>
  );
};

export default SideBar;

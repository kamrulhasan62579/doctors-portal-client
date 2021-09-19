import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faPrescription, faFilePdf, faSignOutAlt, faPlusCircle, faHospitalUser, faColumns, faCalendarCheck} from '@fortawesome/free-solid-svg-icons'
import { UserContext } from "../../../App";
import jwt_decode from "jwt-decode";
import { getAuth, signOut } from "firebase/auth";


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

  const auth = getAuth();
  const handleClick = () => {
      signOut(auth).then(() => {
        localStorage.clear();
        sessionStorage.clear();
      }).catch((error) => {
        console.log(error)
      });
  }

  return (
    <div className="sidebar w-100 m-0">

      <ul className="pt-4 pb-5" id="links">
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
              <FontAwesomeIcon icon={faPlusCircle}/><Link className="sidebar-link" to="/addDoctor">Add Doctor</Link>
          </div>
        </li>
        <li>
          <div className="sidebar-li">
              <FontAwesomeIcon icon={faCalendarCheck}/><Link className="sidebar-link" to="/appointments">Appointments</Link>
          </div>
        </li>
        <li>
         <div className="sidebar-li">
              <FontAwesomeIcon icon={faFilePdf}/><Link className="sidebar-link" to="#">Review</Link>
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
              <FontAwesomeIcon icon={faFilePdf}/><Link className="sidebar-link" to="#">Review</Link>
         </div>
        </li>
        </div>

       }
        <li>
          <div className="sidebar-li">
                <FontAwesomeIcon icon={faSignOutAlt}/> <a className="sidebar-link" onClick={handleClick} href="/">Log Out</a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;

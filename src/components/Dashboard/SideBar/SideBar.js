import React, { useContext, useEffect, useState } from "react";
import "./SideBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faPrescription, faFilePdf, faSignOutAlt, faPlusCircle, faHospitalUser, faColumns, faCalendarCheck} from '@fortawesome/free-solid-svg-icons'
import { UserContext } from "../../../App";
import jwt_decode from "jwt-decode";
import { getAuth, signOut } from "firebase/auth";
import FancySideBar from "../../FancySideBar/FancySideBar";
import { useHistory } from "react-router-dom";


const SideBar = () => {
   const [isDoctor, setIsDoctor] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
      if (token) {
          const decodedToken = jwt_decode(token);
          const userEmail = decodedToken.email;

          fetch(`https://pacific-savannah-02402.herokuapp.com/isdoctor/3?email=${userEmail}`)
          .then(res => res.json())
          .then(data=> setIsDoctor(data))
      }

  }, [])
  const history = useHistory();

  const auth = getAuth();
  const handleClick = () => {
      signOut(auth).then(() => {
        localStorage.clear();
        sessionStorage.clear();
        history.push("/")
      }).catch((error) => {
        console.log(error)
      });
  }

  return (
    <div className="sidebar w-100 m-0 p-0 d-flex justify-content-center">
       <FancySideBar handleClick={handleClick} isDoctor={isDoctor}></FancySideBar>
    </div>
  );
};

export default SideBar;

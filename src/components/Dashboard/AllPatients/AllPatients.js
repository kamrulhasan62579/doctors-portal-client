import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import PrescriptionData from "../PrescriptionData/PrescriptionData";
import SideBar from "../SideBar/SideBar";
import Spinner from 'react-spinner-material';


const AllPatients = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [prescriptions, setPrescriptions] = useState([]);
  useEffect(() => {
    fetch("https://pacific-savannah-02402.herokuapp.com/prescriptions")
      .then(res => res.json())
      .then(data => setPrescriptions(data));
  }, []);

  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    fetch("https://pacific-savannah-02402.herokuapp.com/appointment")
      .then(res => res.json())
      .then(data => setAppointments(data));
  }, []);

  const newData = [...prescriptions, ...appointments];
  // if(newData){
  const newAppointment = { ...loggedInUser };
  newAppointment.allPatientsLenght = newData.length;
  // }
  return (
    <div className="row w-100 m-0">
      <div className="col-md-3">
        <SideBar />
      </div>
      {
        newData.length === 0 ?
      <div className="col-md-9 mt-5 d-flex align-items-center justify-content-center">
        <Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true} />
      </div>
      :
      <div className="col-md-9 mt-5 pb-5">
        <h5>Prescriptions</h5>
        <PrescriptionData prescriptions={newData} />
      </div>
      }
    </div>
  );
};

export default AllPatients;

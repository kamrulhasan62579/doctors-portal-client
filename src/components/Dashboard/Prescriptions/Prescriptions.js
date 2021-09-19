import React, { useEffect, useState } from "react";
import Spinner from "react-spinner-material";
import PrescriptionData from "../PrescriptionData/PrescriptionData";
import SideBar from "../SideBar/SideBar";

const Prescriptions = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  useEffect(() => {
    fetch("https://pacific-savannah-02402.herokuapp.com/prescriptions")
      .then(res => res.json())
      .then(data => setPrescriptions(data));
  }, []);
  return (
    <div className="row w-100 m-0">
      <div className="col-md-3">
        <SideBar />
      </div>
      {
        prescriptions.length === 0 ?
        <div className="col-md-9 mt-5 d-flex align-items-center justify-content-center">
        <Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true} />
      </div>
      :
       <div className="col-md-9 pb-5">
        <h5 className="mt-5">Prescriptions</h5>
        <PrescriptionData prescriptions={prescriptions} />
      </div>
      }
     
    </div>
  );
};

export default Prescriptions;

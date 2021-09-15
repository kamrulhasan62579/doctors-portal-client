import React, { useEffect, useState } from "react";
import PrescriptionData from "../PrescriptionData/PrescriptionData";
import SideBar from "../SideBar/SideBar";

const Prescriptions = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  useEffect(() => {
      fetch('http://localhost:3010/prescriptions')
      .then(res => res.json())
      .then(data => setPrescriptions(data))
  }, [])
  return (
    <div className="row w-100">
      <div className="col-md-3">
        <SideBar />
      </div>
      <div className="col-md-9">
        <h5>Prescriptions</h5>
       <PrescriptionData prescriptions={prescriptions}></PrescriptionData>
      </div>
    </div>
  );
};

export default Prescriptions;

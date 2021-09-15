import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import PrescriptionData from '../PrescriptionData/PrescriptionData';
import SideBar from '../SideBar/SideBar';

const AllPatients = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
     const [prescriptions, setPrescriptions] = useState([]);
        useEffect(() => {
            fetch('http://localhost:3010/prescriptions')
            .then(res => res.json())
            .then(data => setPrescriptions(data))
        }, [])

          const [appointments, setAppointments] = useState([])
        useEffect(() => {
            fetch('http://localhost:3010/appointment')
            .then(res => res.json())
            .then(data => setAppointments(data))
        }, [])

        const newData = [...prescriptions, ...appointments];
        // if(newData){
            const newAppointment = {...loggedInUser};
            newAppointment.allPatientsLenght = newData.length;  
        // }
    return (
        <div className="row w-100">
      <div className="col-md-3">
        <SideBar/>
      </div>
      <div className="col-md-9">
        <h5>Prescriptions</h5>
       <PrescriptionData prescriptions={newData}></PrescriptionData>
      </div>
    </div>
    );
};

export default AllPatients;
import React, { useEffect, useState } from 'react';
import DoctorData from '../DoctorData/DoctorData';

const Doctor = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3010/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    return (
        <div className="w-100 m-0 row">
           <div>
                <h4 style={{color: "#17D2BB", textAlign:"center", paddingBottom: "35px"}}>Our Doctors</h4>
           <div className="row w-100 d-flex justify-content-center">
                {
                 doctors.map(doc =>  <DoctorData key={doc._id} data={doc}></DoctorData> )
                }
           </div>
           </div>
        </div>
    );
};

export default Doctor;
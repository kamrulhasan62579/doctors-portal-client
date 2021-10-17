import React, { useEffect, useState } from 'react';
import Spinner from 'react-spinner-material';
import DoctorData from '../DoctorData/DoctorData';

const Doctor = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('https://pacific-savannah-02402.herokuapp.com/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    return (
        <div className="w-100 p-5">
           <div>
                <h4 style={{color: "#17D2BB", textAlign:"center", paddingBottom: "35px"}}>Our Doctors</h4>
           <div className="d-flex justify-content-center align-items-center">
               <div className="row w-100 d-flex justify-content-center">
                {
                 doctors.length === 0 ? <div className="mt-5 d-flex align-items-center justify-content-center">
                <Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true} />
                </div>
                  :
                     doctors.map(doc =>  <DoctorData key={doc._id} data={doc}></DoctorData> )
                }
           </div>
           </div>
           </div>
        </div>
    );
};

export default Doctor;
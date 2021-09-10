import React from 'react';
import image from '../../../images/5790-removebg.png'
import DoctorData from '../DoctorData/DoctorData';
const doctors = [
    {
        name: "Probath Nami",
        images: image,
        id: "1",
        contact: "+01589374342"
    },
     {
        name: "Marjukh Rasel",
        images: image,
        id: "2",
        contact: "+015655757567"
    },
     {
        name: "Sami Debun",
        images: image,
        id: "3",
        contact: "+0158575642"
    }
]

const Doctor = () => {
    return (
        <div className="w-100">
            <h4 style={{color: "#17D2BB", textAlign:"center"}}>Our Doctors</h4>
           <div className="row w-100 d-flex justify-content-center">
                {
                 doctors.map(doc =>  <DoctorData key={doc.id} data={doc}></DoctorData> )
                }
           </div>
        </div>
    );
};

export default Doctor;
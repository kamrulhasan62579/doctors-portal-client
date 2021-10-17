import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import "./DoctorData.css"


const DoctorData = ({data}) => {
    return (
            <div style={{textAlign: "center", background: "linear-gradient(#fceabb, #f8b500)"}} className=" pb-2 m-2 single-doctor col-md-6 col-sm-6 col-12 col-lg-3 col-xl-2 col-xxl-2 align-items-center">
                <img src={data.image ? data.image : "https://i.ibb.co/9VMwx9k/43-434438-admin-person-man-people-customer-user-human-transparent-removebg-preview.png"} alt="" style={{height: "80%", width: "65%"}} className="img-fluid"/>
                <h5>{data.doctorName}</h5>
                <div className="align-items-center">
                    <p>
                    <a href={`tel:${data.phoneNumber}`}>
                        <FontAwesomeIcon style={{color: "#17D2BB", fontSize: "20px"}} icon={faPhone}/>
                    {data.phoneNumber}</a> </p> 
                </div>
            </div>
           

    );
};

export default DoctorData;
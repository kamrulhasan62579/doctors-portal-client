import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const DoctorData = ({data}) => {
    return (
            <div style={{textAlign: "center"}} className="col-md-3 col-sm-6 col-12 col-lg-3 col-xl-2 col-xxl-2 align-items-center">
                <img src={data.image} alt="" className="img-fluid"/>
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
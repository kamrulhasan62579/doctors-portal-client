import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './InfoCard.css'

const InfoCard = ({info}) => {
    return (
        <div className={`rounded m-2 d-flex justify-content-evenly text-light col-8 col-sm-7 col-lg-5 col-xl-4 col-xxl-3  col-md-5 ps-3 pt-4 pb-4 pe-3 info-${info.background}`}>
            <FontAwesomeIcon className="display-2" icon={info.icon}/>
            <div className="">
                <h4 >{info.title}</h4>
                <small>{info.description}</small>
            </div>
        </div>
    );
};

export default InfoCard;
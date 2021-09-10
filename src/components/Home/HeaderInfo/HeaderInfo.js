import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarker, faClock } from '@fortawesome/free-solid-svg-icons'
const infoData = [
    {
        id: '1',
        title: "Opening Hours",
        background: "primary",
        icon: faClock,
        description: "We open 6 days in week"
    },
    {
        id: '2',
        title: "Visit Our Location",
        background: "dark",
        icon: faMapMarker,
        description: "Brooklin NY 10003 USA"
    },
    {
        id: '3',
        title: "Contact Us Now",
        background: "primary",
        icon: faPhone,
        description: "+134895897689"
    }
]


const HeaderInfo = () => {
  
    return (
        <section className="info-header w-100 d-flex row justify-content-center">
           {
               infoData.map(data => <InfoCard key={data.id} info={data}></InfoCard> )
           }
        </section>
    );
};

export default HeaderInfo;
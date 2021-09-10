import React from 'react';
import tooth1 from "../../../images/tooth-1.png"
import tooth2 from "../../../images/tooth-2.png"
import tooth3 from "../../../images/tooth-3.png"
import ServiceCard from '../ServiceCard/ServiceCard';
const serviceData = [
    {
        id: '1',
        title: "Fluoride Treatment",
        image: tooth1
    },
    {
        id: '2',
        title: "Cavity Filling",
        image: tooth2
    },
    {
        id: '3',
        title: "Teeth Whitening",
        image: tooth3
    }
]

const Services = () => {
    return (
        <div className="text-center"> <h4 style={{color: "#20c8c2"}}>OUR SERVICES</h4>
        <h1>SERVICES WE PROVIDE</h1>
        
         {/* <div className="spacing">
            </div> */}
           
            <div className="mt-5 w-100 d-flex row justify-content-center p-3">
                 {
                     serviceData.map(data => <ServiceCard key={data.id} data={data}></ServiceCard> )
                 }
            </div>
        </div>
    );
};

export default Services;
import React from 'react';

const ServiceCard = ({data}) => {
    return (
        <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-12 col-sm-6">
            <img src={data.image} alt="" className="img-fluid"/>
            <h4>{data.title}</h4>
            <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae laudantium animi ratione quisquam similique quibusdam?</p>
        </div>
    );
};

export default ServiceCard;
import React from 'react';
import '../Testimonal/Testimonal.css'

const TestimonalData = ({data}) => {
    return (
        <div className="shadow m-3 p-3 bg-light testimonal col-9 col-sm-7 col-lg-3 col-xl-3 col-xxl-3 col-md-3 rounded">
            <div className="pb-5 pt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur velit neque nam, quisquam itaque!
            </div>
            <div className="d-flex align-items-center pt-1 justify-content-center ">
                <div>
                    <img src={data.image} alt="" className="img-fluid"/>
                </div>
                <div className="ps-3 ">
                    <div style={{fontSize: "18px", fontWeight: "500"}}>{data.name}</div> 
                    <div>{data.address}</div>
                </div>
            </div>
        </div>
    );
};

export default TestimonalData;
import React from 'react';
import care from '../../../images/Mask Group 3.png'

const ExceptionalCare = () => {
    return (
        <div className="d-flex w-100  h-100 justify-content-center">
            <div className="row container align-items-center ">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <img src={care} alt="" className="img-fluid"/>
            </div>
            <div className=" col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <h1>Exceptional Dental Care <br/> on Your Terms</h1>
                <p style={{textAlign: "justify"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita est sit nisi Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit omnis nesciunt hic inventore assumenda iste vel fugiat asperiores commodi. vel possimus porro vero minima nam illo!</p>
                <div className="btn btn-success">Learn more...</div>
            </div>
          </div>
        </div>
    );
};

export default ExceptionalCare;
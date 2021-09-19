import React from "react";
import image1 from "../../../images/Ellipse 1.png";
import image2 from "../../../images/Ellipse 2.png";
import image3 from "../../../images/Ellipse 3.png";
import TestimonalData from "../TestimonalData/TestimonalData";
import "./Testimonal.css";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spinner from 'react-spinner-material';


const testimonalData = [
  {
    id: "1",
    name: "Winson Harry",
    image: image1,
    address: "California",
  },
  {
    id: "2",
    name: "Devid Brown",
    image: image2,
    address: "New York",
  },
  {
    id: "3",
    name: "Willium Barry",
    image: image3,
    address: "Washington",
  },
];

const Testimonal = () => {
  return (
    <div className="w-100">
      <div className="d-flex justify-content-center align-items-center p-2">
        <div className="pe-3">
          <h5 style={{ color: "#12D0DA" }}>TESTIMONAL</h5>
          <h1>
            What's Our <br/> Patients  Says
          </h1>
        </div>
        <div
          style={{ color: "#D6F6F6", fontSize: "250px" }}
          className="offset-md-3"
        >
          <FontAwesomeIcon icon={faQuoteLeft} />
        </div>
      </div>
      <div className="row w-100 d-flex justify-content-center">
        
        {testimonalData.map(pd => <TestimonalData key={pd.id} data={pd} />)}
      </div>
    </div>
  );
};

export default Testimonal;

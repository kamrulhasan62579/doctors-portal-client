import React from 'react';
import { useHistory } from 'react-router-dom';
import chair from '../../../images/chair.png'
import './HeaderMain.css'

const HeaderMain = () => {
        const history = useHistory();
    const handlePush = () =>{
        history.push("/makeAppointment")
    }
    return (
        <div className="d-flex justify-content-center">
            <main style={{height: "670px", width:"100%"}}  className="row  align-items-center">
            <div className="col-md-6 col-12  ">
                 <h1 className="headerMainH1" style={{color: "rgb(58,66,66)"}}>Your New Smile <br/> Starts Here</h1>
                 <p style={{textAlign: "justify", color: "violet"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint adipisci illo nihil, laboriosam hic praesentium aut corporis nulla, distinctio facere animi optio minus libero excepturi, iusto impedit non velit quas!</p>
                 <button onClick={handlePush} className="btn btn-success">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6 col-12">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
          </main>
        </div>
    );
};

export default HeaderMain;
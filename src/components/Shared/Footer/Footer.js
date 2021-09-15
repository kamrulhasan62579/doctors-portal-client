import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight} from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
       <div className="">
            <div className="footer-link d-flex justify-content-center" style={{alignItems: "center"}}>
            <div className="row w-100">
            <div style={{color: "white"}} className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                <h5 style={{color: "#5FC7C7"}}>Dental Care</h5>
                <li className="link backward-on-hover">  <FontAwesomeIcon icon={faHandPointRight} />  <a className="a" href="#">Emergency Dental Care</a></li>
                <li className="link backward-on-hover"> <FontAwesomeIcon icon={faHandPointRight} />  <a className="a" href="#">Cheak up</a></li>
                <li className="link backward-on-hover"><FontAwesomeIcon icon={faHandPointRight} />  <a className="a" href="#">Treatment of Personal Diseases</a></li>
                <li className="link backward-on-hover"> <FontAwesomeIcon icon={faHandPointRight} />  <a className="a" href="#">Tooth Extraction</a></li>
                <li className="link backward-on-hover"> <FontAwesomeIcon icon={faHandPointRight} />  <a className="a" href="#">Cheak up</a></li>
            </div>
            <div style={{color: "white"}} className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                <h5 style={{color: "#5FC7C7"}}>Services</h5>
                <li  className="link backward-on-hover"> <FontAwesomeIcon icon={faHandPointRight} />  <a className="a"className="a" href="#">Emergency Dental Care</a></li>
                <li  className="link backward-on-hover"> <FontAwesomeIcon icon={faHandPointRight} />  <a className="a" href="#">Cheak up</a></li>
                <li  className="link backward-on-hover"> <FontAwesomeIcon icon={faHandPointRight} />  <a className="a" href="#">Treatment of Personal Diseases</a></li>
                <li  className="link backward-on-hover"> <FontAwesomeIcon icon={faHandPointRight} />  <a className="a" href="#">Tooth Extraction</a></li>
                <li  className="link backward-on-hover"> <FontAwesomeIcon icon={faHandPointRight} />  <a className="a" href="#">Treatment of Personal Diseases</a></li>
                <li  className="link backward-on-hover"> <FontAwesomeIcon icon={faHandPointRight} />  <a className="a" href="#">Tooth Extraction</a></li>
                <li  className="link backward-on-hover"> <FontAwesomeIcon icon={faHandPointRight} />  <a className="a" href="#">Cheak up</a></li>
            </div>
            <div style={{color: "white"}} className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                <h5 style={{color: "#5FC7C7"}}>Oral Health</h5>
                <li  className="link backward-on-hover"> <FontAwesomeIcon icon={faHandPointRight} />  <a className="a" href="#">Emergency Dental Care</a></li>
                <li  className="link backward-on-hover"> <FontAwesomeIcon icon={faHandPointRight} />  <a className="a" href="#">Cheak up</a></li>
                <li  className="link backward-on-hover"> <FontAwesomeIcon icon={faHandPointRight} />  <a className="a" href="#">Treatment of Personal Diseases</a></li>
                <li  className="link backward-on-hover"> <FontAwesomeIcon icon={faHandPointRight} />  <a className="a" href="#">Tooth Extraction</a></li>
                <li  className="link backward-on-hover"> <FontAwesomeIcon icon={faHandPointRight} />  <a className="a" href="#">Cheak up</a></li>
                <li  className="link backward-on-hover"> <FontAwesomeIcon icon={faHandPointRight} />  <a className="a" href="#">Emergency Dental Care</a></li>
                <li  className="link backward-on-hover"> <FontAwesomeIcon icon={faHandPointRight} />  <a className="a" href="#">Cheak up</a></li>
            </div>
            <div style={{color: "white"}} className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                <h5 style={{color: "#5FC7C7"}}>Our Address</h5>
                <li  className="link backward-on-hover"> <FontAwesomeIcon icon={faHandPointRight} />  <a className="a" href="#">New York 1010101 Hudson</a></li>
                <li  className="link backward-on-hover"> <FontAwesomeIcon icon={faHandPointRight} />  <a className="a" href="#">Yards</a></li>

                <div >
                    <a className="m-2 " style={{fontSize: "3em", color: "white"}} href=""><i class="fab fa-facebook font-icon"></i></a>
                    <a className="m-2 " style={{fontSize: "3em", color: "white"}} href=""><i class="fab fa-google font-icon1"></i></a>
                    <a className="m-2 " style={{fontSize: "3em", color: "white"}} href=""><i class="fab fa-instagram font-icon2"></i></a>
                    <a className="m-2 " style={{fontSize: "3em", color: "white"}} href=""><i class="fab fa-twitter font-icon"></i></a>
                </div>
                <br/>

               <button className="btn btn-success">Call Now</button>
            </div>
        </div>
       
        </div>
        <div style={{backgroundColor: "#2B3346"}}>
            <p style={{color: "violet", textAlign:"center"}}>All Rights Reserved by Kamrul Hasan || 2021</p>
        </div>       
    </div>
    );
};

export default Footer;
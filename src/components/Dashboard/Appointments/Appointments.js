import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import AppointmentByDate from "../ApponitmentByDate/AppointmentByDate";
import SideBar from "../SideBar/SideBar";

const Appointments = () => {
  const [byDate, setByDate] = useState([]);
  const [value, setValue] = useState(null);
  console.log(value)
  // if(byDate){
  //     console.log(byDate);
  // }
  // console.log(value);
    const changeDate = (e) => {
        // console.log(e)
        setValue(e)   
  }
  useEffect(() => {
      fetch('http://localhost:3010/appointmentByDate', {
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify({date: value})
      })
      .then(res => res.json())
      .then(appointments => setByDate(appointments))
  }, [value])

  return (
    <div>
      <div className="row w-100">
        <div className="col-md-3 col-xxl-3">
          <SideBar />
        </div>
        <div className="col-md-4 col-xxl-3">
            <h3 className="p-3">Appointments</h3>
         <div className="">
              <Calendar onChange={changeDate} value={value} />
         </div>
        </div>
        <div className="col-md-4 col-xxl-6 pt-5 mt-3">
          {value ? <h4 style={{color: "Green"}}>Appointments of {new Date(value).toDateString()}</h4>
          :
          <h5>Please select a date to see your appointment</h5>
          }
          <h1>
             <AppointmentByDate appointments={byDate}></AppointmentByDate>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Appointments;

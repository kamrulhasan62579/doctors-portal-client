import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SideBar from "../SideBar/SideBar";

export default function AddDoctor() {
    const [img, setImg] = useState();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleClick = event => {
    console.log(event.target.files[0]);
    const formData = new FormData();
    formData.set('key', 'd5fadf200fc1d5e3759a8be640ed9db6')
    formData.append('image', event.target.files[0])
    axios.post('https://api.imgbb.com/1/upload', formData)
    .then(res => {
        setImg(res.data.data.display_url)
    })
  };

    const onSubmit = data => {
    // console.log(data);
    const newData = {...data, image: img}
    fetch("http://localhost:3010/doctors", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newData)
    })
    .then(res => res.json())
    .then(success => {
      console.log(success)
      console.log('Doctors Addeded Successfully')
      alert('Doctor Added Successfull')
    })
  };

  return (
    <div className="row w-100 m-0">
      <div className="col-md-3">
        <SideBar />
      </div>
      <div className="col-md-9 mt-5">
          <h5>Add Doctors details</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className="form-control" type="file" onChange={handleClick} />

          <br />
          <input
           placeholder="Doctor Name"
            className="form-control"
            {...register("doctorName", { required: true })}
          />
          {errors.doctorName && <span>Doctor Name is required</span>}

          <br />
         <input
           placeholder="Email"
            className="form-control"
            {...register("email", { required: true })}
          />
          {errors.email && <span>Doctor Name is required</span>}

          <br />
          <input
          placeholder="Phone Number"
            className="form-control"
            {...register("phoneNumber", { required: true })}
          />
          {errors.phoneNumber && <span>Phone Number is required</span>}

          <br />


          <input className="btn btn-secondary" type="submit" />
        </form>
      </div>
    </div>
  );
}

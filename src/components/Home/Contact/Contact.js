import React from "react";
import { useForm } from "react-hook-form";
import Fancysubmit from "../../FancySubmit/Fancysubmit";
import './Contact.css'

export default function Contact() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
      console.log(data);
  };


  return (
    <div style={{textAlign: "center"}} className="back w-100 pt-5">
       <div className="col-md-8 offset-md-2 col-12 col-xxl-8 p-5">
        <h5 style={{color: "#17D2BB"}}>CONTACT US</h5>
        <h1 style={{color: "white"}}>Always Contact With Us</h1> <br/><br/>
        <form onSubmit={handleSubmit(onSubmit)}>
         <input className="form-control" placeholder="Email Address" {...register("email", { required: true })}/>
        {errors.email && <span>This field is required</span>}
        <br/><br/>
        <input className="form-control" placeholder="Subject" {...register("subject", { required: true })} />
        {errors.subject && <span>This field is required</span>}
        <br/><br/>
        {/* <input  /> */}
        <textarea name="" id="" cols="50%" rows="8" className="form-control" {...register("description", { required: true })} placeholder="Description"></textarea>
         {errors.description && <span>This field is required</span>}
        <br/><br/>
       <Fancysubmit ></Fancysubmit>
      </form>
      </div>
    </div>
  );
}
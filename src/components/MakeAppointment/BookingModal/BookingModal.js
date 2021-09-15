import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import './BookingModal.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    width: "55%",
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },

 
};
Modal.setAppElement('#root');


const BookingModal = ({modalIsOpen, dateState, cardData, closeModal}) => {

 const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
      // console.log(dateState)
      const newData = {dateState, cardData, ...data}
      // console.log(newData);
     if(dateState && cardData){
          fetch('http://localhost:3010/appointment', {
        method: 'POST',
       body: JSON.stringify(newData),
       headers: {
            'Content-type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(success => {
        closeModal();
        alert('Have a Relax')
      })
     }
       
  };

 
    return (
        <div>
          
     {
       dateState ?  <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h5 style={{color: "#5FC7C7", textAlign: "center"}}>{cardData.subject}</h5>
        {
          dateState && <p className="text-center"><small>On {dateState.toDateString()}</small></p>
        }
          <form className="form-style" style={{textAlign: "center"}}  onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Patient Name" className="input-style form-control" {...register("patientName", { required: true })} />
            {errors.patientName && <span className="error">Patient Name is required</span>}

            <br/>


           <input type="email" placeholder="Email" className="input-style form-control" {...register("email", { required: true })} />
            {errors.email && <span className="error">Email is required</span>}

            <br/>

            <select className="input-style form-control" {...register("gender")}>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">other</option>
            </select>

            <br/>

            <input placeholder="Age" type="number" className="input-style form-control" {...register("age", { required: true })} />
            {errors.age && <span className="error">Age is required</span>}

            <br/>

            <input placeholder="Weight" type="number" className="input-style form-control" {...register("weight", { required: true })} />
            {errors.weight && <span className="error">Weight is required</span>}

            <br/>
            
            <input type="tel"  placeholder="Phone Number" className="input-style form-control" {...register("phoneNumber", { required: true })} />
            {errors.phoneNumber && <span className="error">Phone Number is required</span>}

            <br/>
    
            <input className="form-label btn btn-success" type="submit" />
             {/* <button className="form-label btn btn-secondary" onClick={closeModal}>Close</button> */}
            </form>
            <br/>
      </Modal>
      : 
       <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        
          <form  style={{textAlign: "center"}}  onSubmit={handleSubmit(onSubmit)}>
             <h5 style={{color: "red", alignItems: "center"}}>Select a date for your appointment!!! Something went wrong. </h5>
                  <br/>
             <button className="form-label btn btn-secondary" onClick={closeModal}>Close</button>
            </form>
            <br/>
      </Modal>
     }
    </div>
    );
};

export default BookingModal;
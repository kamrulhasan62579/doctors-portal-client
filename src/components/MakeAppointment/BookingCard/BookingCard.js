import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';

const BookingCard = ({cardData, dateState}) => {
      const [modalIsOpen, setIsOpen] = useState(false);

        function openModal() {
            setIsOpen(true);
        }
        function closeModal() {
            setIsOpen(false);
        }
   
    return (
        <div className="shadow text-center pt-5 pb-5 p-3  m-3 bg-light rounded col-md-4 col-lg-3 col-xl-3 col-xxl-3 col-8 col-sm-6">
            <h5 style={{color: "#5FC7C7"}}>{cardData.subject}</h5>
            <h6>{cardData.visitingHour}</h6>
            <p style={{fontSize: "12px"}}>{cardData.totalSpace} SPACES AVAILABLE</p>
           
           <p onClick={openModal} className="btn btn-primary">BOOK APPOINTMENT</p>
           <BookingModal modalIsOpen={modalIsOpen} cardData={cardData} dateState={dateState} closeModal={closeModal}></BookingModal>
        </div>
    );
};

export default BookingCard;
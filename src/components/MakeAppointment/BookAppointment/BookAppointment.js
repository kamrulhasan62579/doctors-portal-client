import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
const availableAppointment = [
    {
        id: "1",
        subject: "Cavity Protection",
        visitingHour:"8:00AM - 9:00AM",
        totalSpace: "10"
    },
        {
        id: "2",
        subject: "Teeth Dentistry",
        visitingHour:"8:00AM - 9:00AM",
        totalSpace: "10"
    },
        {
        id: "3",
        subject: "Teeth Orthodontics",
        visitingHour:"8:00AM - 9:00AM",
        totalSpace: "10"
    },
        {
        id: "4",
        subject: "Teeth Freshing",
        visitingHour:"5:00PM - 8:00PM",
        totalSpace: "10"
    },
        {
        id: "5",
        subject: "Teeth Cloning",
        visitingHour:"8:00PM - 9:00PM",
        totalSpace: "10"
    },
        {
        id: "6",
        subject: "Teeth Oparations",
        visitingHour:"6:00AM - 7:00AM",
        totalSpace: "10"
    }
]
const BookAppointment = ({dateState}) => {
    return (
        <section>
            {
                dateState ? <h2 className="mb-5" style={{color: "#5FC7C7", textAlign: "center"}}>Available appointments on {dateState.toDateString()}</h2>
                : <h2 className="mb-5" style={{color: "#5FC7C7", textAlign: "center"}}>Appointment available on :</h2>

            }
            <div className="row d-flex justify-content-center w-100 mb-5">
                {
                 availableAppointment.map(data => <BookingCard key={data.id} dateState={dateState} cardData={data}></BookingCard> )
                }
            </div>
        </section>
    );
};

export default BookAppointment;
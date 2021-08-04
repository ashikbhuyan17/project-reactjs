import React, { useState } from 'react';
import BookAppointment from '../BookAppointment/BookAppointment';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import './Appointment.css'
const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const handleDateChange = (date) => {
        console.log("change", date);
        setSelectedDate(date)
    }
    return (
        <div >
            <Navbar />
            <AppointmentHeader handleDateChange={handleDateChange} />
            <BookAppointment date={selectedDate}></BookAppointment>
            <Footer />
        </div>
    );
};

export default Appointment;
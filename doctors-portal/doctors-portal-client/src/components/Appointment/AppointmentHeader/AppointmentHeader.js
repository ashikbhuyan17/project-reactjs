import React, { useState } from 'react';
import chair from '../../../images/chair.png'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import './AppointmentHeader.css'

const AppointmentHeader = ({ handleDateChange }) => {
    // const [value, onChange] = useState(new Date());


    return (
        <main style={{ height: "600px" }} className="row d-flex align-items-center appointment-container">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: "#3A4256" }}>Appointment</h1>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                    className="calendar"
                />
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default AppointmentHeader;
import React, { useEffect, useState } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [appointments, setAppointments] = useState([])
    const containerStyle = {
        backgroundColor: '#F4FDFB',
        height: '100%'
    }

    const handleDateChange = (date) => {
        console.log("change", date);
        setSelectedDate(date)
    }
    useEffect(() => {
        fetch('http://localhost:9000/appointmentByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAppointments(data)
            })
    }, [selectedDate])

    return (

        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-5">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                        className="calendar"
                    />
                </div>
                <div className="col-md-5">
                    <AppointmentsByDate appointments={appointments} />
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
import React, { useState, useEffect } from 'react';
import './styles/dashboard.css'
import DashboardCard from './DashboardCard';

const Dashboard = () => {
    const [seatDetails, setSeatDetails] = useState([]);

    useEffect(() => {
        // Load saved seat details from local storage on component mount
        const savedSeatDetails = JSON.parse(localStorage.getItem('busSeatDetails')) || [];
        console.log(savedSeatDetails);
        setSeatDetails(savedSeatDetails);
    }, []); // The empty dependency array ensures the effect runs only once on mount

    const updateDetails = (id, details) => {
        const updatedSeatDetails = seatDetails.map((seat) =>
            seat.id === id ? { ...seat, details: details } : seat
        );
        // Update local storage
        localStorage.setItem('busSeatDetails', JSON.stringify(updatedSeatDetails));
    }

    const deleteBooking = (id) => {
        const updatedSeatDetails = seatDetails.filter((seat) => seat.id !== id);

        // Update local storage
        localStorage.setItem('busSeatDetails', JSON.stringify(updatedSeatDetails));
        setSeatDetails(updatedSeatDetails)
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <div className="dashboard-section">
                {seatDetails.map((seat) => (
                    <DashboardCard key={seat.id} seatDetails={seat} onEdit={(id, details) => updateDetails(id, details)} onDelete={(id) => deleteBooking(id)} />
                ))}
            </div>
        </div>
    );
};
export default Dashboard;

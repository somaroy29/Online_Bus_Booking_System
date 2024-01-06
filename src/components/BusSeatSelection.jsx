import React, { useState, useEffect } from 'react';
import { Seat } from './Seat';
import './styles/busSelection.css';

export const BusSeatSelection = () => {
    const totalRows = 8;
    const seatsPerRow = 5;

    // Initialize seats with default values
    const initialSeats = Array.from({ length: totalRows * seatsPerRow }, (_, index) => ({
        id: index + 1,
        selected: false,
        details: null,
        booked: false
    }));

    const [seats, setSeats] = useState(initialSeats);

    useEffect(() => {
        // Load saved seat details from local storage on component mount
        const savedSeatDetails = JSON.parse(localStorage.getItem('busSeatDetails')) || [];

        // Update seat details in state based on saved data
        setSeats(prevSeats => prevSeats.map(seat => ({
            ...seat,
            details: savedSeatDetails.find(savedSeat => savedSeat.id === seat.id)?.details || null,
            booked: savedSeatDetails.find(savedSeat => savedSeat.id === seat.id) ? true: false
        })));
    }, []);

    const handleSeatClick = (id) => {
        //set previous seat click if any as false
        setSeats((prevSeats) => {
            const updatedSeats = prevSeats.map((seat) => seat.id === id ? { ...seat, selected: !seat.selected } : {...seat, selected: false}
            );
            return updatedSeats;
        });
    };

    const handleDetailsSubmit = (id, details) => {
        setSeats((prevSeats) => {
            const updatedSeats = prevSeats.map((seat) => seat.id === id ? { ...seat, booked: !seat.booked, details } : seat
            );
            return updatedSeats;
        });

        // Save seat details to local storage
        const savedSeatDetails = (localStorage.getItem('busSeatDetails')
            ? JSON.parse(localStorage.getItem('busSeatDetails'))
            : []
        ).filter((savedSeat) => savedSeat.id !== id);

        savedSeatDetails.push({ id, details });
        localStorage.setItem('busSeatDetails', JSON.stringify(savedSeatDetails));
    };

    console.log(seats);
    return (
        <div>
            <h2>Upper Seats</h2>
            <div className="seat-section">
                {seats.slice(0, totalRows * seatsPerRow / 2).map((seat) => (
                    <Seat
                        key={seat.id}
                        seat={seat}
                        onSeatClick={handleSeatClick}
                        onDetailsSubmit={handleDetailsSubmit} />
                ))}
            </div>

            <h2>Lower Seats</h2>
            <div className="seat-section">
                {seats.slice(totalRows * seatsPerRow / 2).map((seat) => (
                    <Seat
                        key={seat.id}
                        seat={seat}
                        onSeatClick={handleSeatClick}
                        onDetailsSubmit={handleDetailsSubmit} />
                ))}
            </div>
        </div>
    );
};

export default BusSeatSelection;

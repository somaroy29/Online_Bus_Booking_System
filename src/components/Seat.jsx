import React from 'react';
import { DetailsPopup } from './DetailsPopup';
import './styles/busSelection.css';
import emptySeatImage from'../assests/empty_seat.png';
import reservedSeatImage from '../assests/reserved_seat.png'

export const Seat = ({ seat, onSeatClick, onDetailsSubmit }) => {
    const { id, selected, details, booked } = seat;

    const handleClick = () => {
        onSeatClick(id);
    };

    const handleDetailsSubmit = (details) => {
        onDetailsSubmit(id, details);
    };

    return (
        <div className={`seat ${booked ? 'booked' : ''}`} onClick={handleClick}>
            <img className="seat-image" src={booked ? reservedSeatImage:  emptySeatImage} alt="Chair" />
            <span>{id}</span>
            {!booked && selected && (
                <DetailsPopup details={details} onDetailsSubmit={handleDetailsSubmit} />
            )}
        </div>
    );
};

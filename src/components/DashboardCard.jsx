import React, { useState } from 'react';
import './styles/dashboardCard.css'

const DashboardCard = ({ seatDetails, onEdit, onDelete }) => {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const { id, details } = seatDetails;
    const { firstName: initialfirstName, lastName: initialLastname, email: initialEmail } = details;

    const [isEditing, setEditing] = useState(false);
    const [firstName, setFirstName] = useState(initialfirstName);
    const [lastName, setLastName] = useState(initialLastname);
    const [email, setEmail] = useState(initialEmail);

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleSaveClick = () => {
        // Save the updated details
        onEdit(id, { firstName, lastName, email });
        setEditing(false);
    };

    const handleDeleteClick = () => {
        onDelete(id)
    }

    return (
        <div className="dashboard-card">
            <div>
                <strong>Seat ID:</strong> {id}
            </div>
            {isEditing ? (
                <div>
                    <label>
                        <strong>FirstName:</strong>
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </label>
                </div>
            ) : (
                <div>
                    <strong>FirstName:</strong> {firstName}
                </div>
            )}
            {isEditing ? (
                <div>
                    <label>
                        <strong>LastName:</strong>
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </label>
                </div>
            ) : (
                <div>
                    <strong>LastName:</strong> {lastName}
                </div>
            )}
            {isEditing ? (
                <div>
                    <label>
                        <strong>Email:</strong>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                </div>
            ) : (
                <div>
                    <strong>Email:</strong> {email}
                </div>
            )}
            <div>
                <strong>Booking Date:</strong> {day}-{month}-{year}
            </div>
            {isEditing ? (
                <button onClick={handleSaveClick}>Save</button>
            ) : (
                <button onClick={handleEditClick}>Edit</button>
            )}
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    );
};

export default DashboardCard;

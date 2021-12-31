import React, { useEffect, useState } from 'react'
import FlashMessage from '../common/FlashMessage';

const Reservations = (props) => {

    const [reservationData, setReservations] = useState([]);

    useEffect(() => {
        const getReservations = async () => {
            const response = await fetch('http://localhost:3001/reservations')
            const data = await response.json();
            setReservations(data)
        }  
        getReservations() 
    }, [])

    const deleteReservation = id => {
        if (confirm('Are you sure you want to delete this reservation?')) {
            setReservations(reservationData.filter(reservation => reservation.id !== id));
            FlashMessage({ message: "Reservation has been deleted successfully." });
        }
    };

    return (
        <div className="container">
            <div className="flex-row">
                <div className="flex-large">
                    <h2>View reservations</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Source</th>
                                <th>Destination</th>
                                <th>From Date</th>
                                <th>To Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reservationData.length > 0 ? (
                                reservationData.map(reservation => (
                                    <tr key={reservation.id}>
                                        <td>{reservation.source}</td>
                                        <td>{reservation.destination}</td>
                                        <td>{reservation.from_date}</td>
                                        <td>{reservation.to_date}</td>
                                        <td className="d-flex">
                                            <button className="button delete-button" onClick={() => deleteReservation(reservation.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={3}>No reservations found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Reservations
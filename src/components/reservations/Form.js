import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const ReservationForm = props => {
    const { editing } = props;
    const [reservation, setReservation] = useState(props.currentReservation);

    useEffect(() => {
        setReservation(props.currentReservation);
    }, [props]);

    //React controlled fields
    const handleInputChange = event => {
        const {name, value} = event.target;
        setReservation({...reservation, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        editing ? props.updateReservation(reservation.id, reservation) : props.addReservation(reservation);
    }
    
    return (
        <form onSubmit={event => handleSubmit(event)} >
            <div className="label-wrapper">
                <h2> {editing ? "Edit Reservation" : "Add Reservation"} </h2>
                <label>Author: Ajay</label>
            </div>
            <label>Select Source</label>
            <input type="text" name="title" placeholder="Select Source" value={reservation.source} onChange={handleInputChange} required/>
            <label>Select Destination</label>
            <input type="text" name="title" placeholder="Select Destination" value={reservation.destination} onChange={handleInputChange} required/>
            <label>Date</label>
            <input type="date" className="date" name="date" rows="8" value={reservation.date} onChange={handleInputChange} required />
            <button className="button"> { editing ? "Update" : "Add new" } Reservation</button>
            { editing && (
                <button onClick={() => props.handleCancel()} className="button cancel-button">
                    Cancel
                </button>
            )}
        </form>
    )
}

ReservationForm.propTypes = {
    editing:PropTypes.bool.isRequired,
    handleCancel:PropTypes.func.isRequired,
    currentReservation:PropTypes.object.isRequired,
    updateReservation:PropTypes.func.isRequired,
    addReservation:PropTypes.func.isRequired,
};

export default ReservationForm;
import React from 'react';
import ReactDOM from 'react-dom';
import ReservationForm from '../components/reservations/Form';

it('Reservation Form page renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <ReservationForm  
    editing={false}
    handleCancel={() => {}}
    currentReservation={{}}
    updateReservation={() => {}}
    addReservation={() => {}} 
  />, div);
});

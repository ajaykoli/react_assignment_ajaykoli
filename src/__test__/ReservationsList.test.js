import React from 'react';
import ReactDOM from 'react-dom';
import Reservations from '../components/reservations/List';

it('Reservations page renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Reservations posts={{}} />, div);
});

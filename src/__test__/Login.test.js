import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../components/auth/Login';

it('login page renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
});


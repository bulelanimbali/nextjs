import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Todo from './components/Todo';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';


ReactDOM.render(
  <di>
    <App />
    <Todo title='I am the king title' />
    <Todo title="this is a new title" />
  </di>,
  document.getElementById('root')
);



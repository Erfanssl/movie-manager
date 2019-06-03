import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Main from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './scss/index.scss';

ReactDOM.render(
    <BrowserRouter>
        <Main />
    </BrowserRouter>,
    document.getElementById('root'));
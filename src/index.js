import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import Card from './Card';
import Quote from './Quote';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
                     <Route exact path='/' element={<App />} />
                     <Route path='Card' element= {<Card  />} />
                     <Route path='/:author' element= {<Quote />} />
                   
                 </Routes>
  </BrowserRouter>
);


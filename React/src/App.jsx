import React from 'react'
import {BrowserRouter, Routes, Route, Router} from 'react-router-dom';
import Home from './components/Home';
import UserForm from './components/forms/UserForm';
import SeeUsers from './components/SeeUsers';
import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/addUser" element={<UserForm />} />
        </Routes>
        <Routes>
          <Route path="/showUsers" element={<SeeUsers />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

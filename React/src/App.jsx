import React from 'react'
import {BrowserRouter, Routes, Route, Router} from 'react-router-dom';
import Home from './components/Home';
import UserForm from './components/forms/UserForm';
import SeeUsers from './components/SeeUsers';
import EditUserPage from './components/EditUserPage.jsx';
import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addUser" element={<UserForm />} />
          <Route path="/showUsers" element={<SeeUsers />} />
          <Route path="/getEditUserPage/:id" element={<EditUserPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

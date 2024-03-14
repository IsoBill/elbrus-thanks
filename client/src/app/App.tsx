import React from 'react';
import './App.css';
import Navbar from '../pages/Navbar/Navbar';
import StudentMain from '../pages/Stunents/StudentsPage';
import { Route, Routes } from 'react-router-dom';
import UpdatePage from '../pages/Update/UpdatePage';

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<StudentMain />} />
        <Route path="/update" element={<UpdatePage />} />
      </Routes>
    </div>
  );
}

export default App;

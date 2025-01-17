import React from 'react';
import {Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import SignUpPage from './Pages/SignUpPage';
import ClassesPage from './Pages/ClassesPage';
import MyWorkoutPage from './Pages/MyWorkOutPage';
import PtSessionsPage from './Pages/PtSessionsPage';
import MembershipCreationPage from './Pages/MembershipCreationPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Create-Membership" element={<MembershipCreationPage />} />
        <Route path="/Classes" element={<ClassesPage />} />
        <Route path="/MyWorkout" element={<MyWorkoutPage />} />
        <Route path="/PtSessions" element={<PtSessionsPage />} />
      </Routes>
  );
}

export default App;

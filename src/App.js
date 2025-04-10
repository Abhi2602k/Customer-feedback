import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import FeedbackForm from './pages/FeedbackForm';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;



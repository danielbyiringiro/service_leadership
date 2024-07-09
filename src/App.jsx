import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './components/Signin';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Scholarship from './components/Scholarship';

export default () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/gallery" element={<Gallery/>} />
      </Routes>
    </Router>
  );
}



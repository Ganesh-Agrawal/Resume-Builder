import './App.css';
import CreateNewResume from './components/CreateNewResume';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ViewResume from './components/ViewResume';
import About from './components/About';
import City from './components/City';

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ResumeState from './context/ResumeState';




function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }


  return (
    <>
    <ResumeState>
      <Router>
        <div>
          <Navbar mode={mode} toggleMode={toggleMode} />
        </div>

        <div className="container">
          <Routes>
            <Route path="createnewresume" element={<CreateNewResume />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="viewresume" element={<ViewResume />} />
            <Route path="about"   element={<About />} />
            <Route path="city"   element={<City />} />
          </Routes>
        </div>
      </Router>
      </ResumeState>
    </>
  );
}

export default App;

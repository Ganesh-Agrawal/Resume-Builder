import './App.css';
import CreateNewResume from './components/CreateNewResume';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ViewResume from './components/ViewResume';
import About from './components/About';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';




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
            <Route path="about" element={<About />} />

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

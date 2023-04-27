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
import PersonalDetail from './components/personalDetail/PersonalDetail';
import Education from './components/education/Education';
import Skills from './components/skill/Skills';
import WorkExperience from './components/workExperience/WorkExperience';




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
            <Route path="createnewresume" element={<PersonalDetail/>} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="viewresume" element={<ViewResume />} />
            <Route path="about"   element={<About />} />
            <Route path="city"   element={<City />} />
            <Route path="/education" element={<Education/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/workexperience" element={<WorkExperience/>}/>
          </Routes>
        </div>
      </Router>
      </ResumeState>
    </>
  );
}

export default App;

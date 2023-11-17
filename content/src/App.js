import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

import './style.css'
import './App.css'
import ScrollToTop from './ScrollTop'
import StartScene from './pages/start-scene'
import RegistrationForUse from './pages/registration-for-use'
import SignUp from './pages/sign-up'
import SignUpCompleted from './pages/sign-up-completed'
import LogIn from './pages/log-in'
import LogInCompleted from './pages/log-in-completed'
import MainScreen from './pages/main-screen'

function App() {
  return (
    <Router>
      <div className='App'>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<StartScene />}/>
          <Route exact path="/registration-for-use" element={<RegistrationForUse />}/>
          <Route exact path="/sign-up" element={<SignUp />}/>
          <Route exact path="/sign-up-completed" element={<SignUpCompleted />}/>
          <Route exact path="/log-in" element={<LogIn />}/>
          <Route exact path="/log-in-completed" element={<LogInCompleted />}/>
          <Route exact path="/main-screen" element={<MainScreen />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

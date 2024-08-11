import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginForm from './LoginForm';
import LandingPage from './LandingPage';
import SignInLandingPage from './SignInLandingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm />} />
        
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/signin-landing" element={<SignInLandingPage />} />
      </Routes>
    </div>
  );
}

export default App;

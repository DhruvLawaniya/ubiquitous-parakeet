import React from 'react';
import { Route, Routes } from 'react-router-dom';
import moengage from "@moengage/web-sdk";
import LoginForm from './LoginForm';
import LandingPage from './LandingPage';
import SignInLandingPage from './SignInLandingPage';


function App() {
  moengage.initialize({app_id: '5DWH5EWA6O661HFBFC5SUCCO'});
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

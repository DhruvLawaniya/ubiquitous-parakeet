import React, { useState } from 'react';
import moengage from "@moengage/web-sdk";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();  // Correctly use the hook

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Login successful', user);
      moengage.add_unique_user_id(user); // UNIQUE_ID is used to uniquely identify a user.
      navigate('/signin-landing');  // Ensure the route exists and is correct
    } catch (error) {
      console.log('Login failed', error);
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>Sign In Testing</h1>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Sign In</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default LoginForm;

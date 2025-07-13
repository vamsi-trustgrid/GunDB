// GunAuth.js
import React, { useState } from 'react';
import Gun from 'gun';
import 'gun/sea';

const gun = Gun({ peers: ['http://localhost:8765/gun'] });
const user = gun.user();

function GunAuth() {
  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [status, setStatus] = useState('');

  const handleSignup = () => {
    user.create(signupUsername, signupPassword, ack => {
      setStatus(ack.err || 'Signup successful');
      setSignupUsername('');
      setSignupPassword('');
    });
  };

  const handleLogin = () => {
    user.auth(loginUsername, loginPassword, ack => {
      setStatus(ack.err || 'Login successful');
      setLoginUsername('');
      setLoginPassword('');
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>GunDB Signup & Login</h2>

      <div>
        <h3>Sign Up</h3>
        <input
          type="text"
          placeholder="Username"
          value={signupUsername}
          onChange={e => setSignupUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={signupPassword}
          onChange={e => setSignupPassword(e.target.value)}
        />
        <button onClick={handleSignup}>Signup</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Login</h3>
        <input
          type="text"
          placeholder="Username"
          value={loginUsername}
          onChange={e => setLoginUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={loginPassword}
          onChange={e => setLoginPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>

      <p style={{ marginTop: '20px' }}>{status}</p>
    </div>
  );
}
export default GunAuth;

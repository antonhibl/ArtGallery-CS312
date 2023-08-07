import React from 'react';

const Register = () => (
	<form method="POST" action="localhost:3000/api/register">
      <label>
        Username:
        <input type="text" name="username" required></input>
      </label>
      <label>
        Email:
        <input type="email" name="email" required></input>
      </label>
      <label>
        Password:
        <input type="password" name="password" required></input>
      </label>
      <button type="submit">Register</button>
    </form>
    <p>Already have an account? <a href="/login">Login</a></p>
);

export default Register;


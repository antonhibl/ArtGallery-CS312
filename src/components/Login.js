import React from 'react';

const Login = () => (
	<form method="POST" action="localhost:3000/api/login">
      <label>
        Email:
        <input type="email" name="email" required></input>
      </label>
      <label>
        Password:
        <input type="password" name="password" required></input>
      </label>
      <button type="submit">Login</button>
    </form>
    <p>Want to make an account? <a href="/register">Register</a></p>
);

export default Login;
~

import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Login() {
  return(
    <form>
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <Button >Submit</Button>
      </div>
    </form>
  )
}
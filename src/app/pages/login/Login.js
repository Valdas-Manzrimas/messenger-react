import React from 'react';
import './login.scss';
import { Link } from 'react-router-dom';
//components
import Input from '../../components/input';
import Button from '../../components/button';

function Login() {
  return (
    <div className="Login">
      <form>
        <Input type="text" name="email" for="email">
          Username
        </Input>
        <Input type="password" name="pass" for="pass">
          Password
        </Input>
        <Button type="submit">Login</Button>
        <p>
          Have an account? <Link to={`/register`}>Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;

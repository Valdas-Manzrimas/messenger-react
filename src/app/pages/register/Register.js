import React from 'react';
import './register.scss';
import { Link } from 'react-router-dom';
//components
import Input from '../../components/input';
import Button from '../../components/button';

function Register() {
  return (
    <div className="Login">
      <form>
        <Input type="text" name="email" for="email">
          Username
        </Input>
        <Input type="text" name="email" for="email">
          Email address
        </Input>
        <Input type="password" name="pass" for="pass">
          Password
        </Input>
        <Input type="rPassword" name="pass" for="pass">
          Repeat password
        </Input>
        <Button type="submit">Sign up</Button>
        <p>
          Already have an account? <Link to={`/login`}>Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;

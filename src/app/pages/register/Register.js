import React, { useState, useCallback } from 'react';
import './register.scss';
import { Link, useHistory } from 'react-router-dom';
//components
import Input from '../../components/input';
import Button from '../../components/button';

function Register() {
  const [userNameInput, setUserNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [rPasswordInput, setRPasswordInput] = useState('');
  const [error, setError] = useState(null);

  const history = useHistory();

  let register = useCallback(async (e) => {
    e.preventDefault();

    if (passwordInput != rPasswordInput) return onError();

    try {
      const response = await fetch('http://localhost:4000/v1/user/register', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          userName: userNameInput,
          email: emailInput,
          password: passwordInput,
        }),
      });

      if (!response.ok) {
        throw response.json();
      }

      history.replace('/login');
    } catch (error) {
      console.log('Incorrect email or password');
    }
  });

  let setUsername = (e) => {
    setUserNameInput(e.target.value);
  };

  let setEmail = (e) => {
    setEmailInput(e.target.value);
  };

  let setPassword = (e) => {
    setPasswordInput(e.target.value);
  };

  let setRPassword = (e) => {
    setRPasswordInput(e.target.value);
  };

  let onError = () => {
    setError(<span>Passwords do not match</span>);
  };

  return (
    <div className="Login">
      <form onSubmit={register}>
        <Input
          type="text"
          name="username"
          htmlFor="username"
          onChange={setUsername}
        >
          Username
        </Input>
        <Input type="text" name="email" htmlFor="email" onChange={setEmail}>
          Email address
        </Input>
        <Input
          type="password"
          name="pass"
          htmlFor="pass"
          onChange={setPassword}
        >
          Password
        </Input>
        <Input
          type="password"
          name="r-pass"
          htmlFor="r-pass"
          onChange={setRPassword}
        >
          Repeat password
        </Input>
        {error}
        <Button type="submit">Sign up</Button>
        <p>
          Already have an account? <Link to={`/login`}>Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;

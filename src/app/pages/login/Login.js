import React, { useState, useCallback, useContext } from 'react';
import './login.scss';
import { Link, useHistory } from 'react-router-dom';
//components
import Input from '../../components/input';
import Button from '../../components/button';
import { AuthenticationContext } from '../../context/authentication';

function Login() {
  const [userNameInput, setUserNameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const history = useHistory();

  // useEffect(() => {
  //   if (localStorage.token) {
  //     history.replace('/messenger');
  //   }
  // }, [history]);

  const { login } = useContext(AuthenticationContext);

  const onLogin = (e) => {
    e.preventDefault();
    login(userNameInput, passwordInput);
  };

  let setUsername = (e) => {
    setUserNameInput(e.target.value);
  };

  let setPassword = (e) => {
    setPasswordInput(e.target.value);
  };

  return (
    <div className="Login">
      <form onSubmit={onLogin}>
        <Input
          type="text"
          name="username"
          htmlFor="username"
          onChange={setUsername}
        >
          Username
        </Input>
        <Input
          type="password"
          name="pass"
          htmlFor="pass"
          onChange={setPassword}
        >
          Password
        </Input>
        <Button type="submit">Login</Button>
        <p>
          Don't have an account? <Link to={`/register`}>Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;

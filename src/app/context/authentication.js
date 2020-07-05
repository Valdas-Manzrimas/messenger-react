import React, { createContext, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

export const AuthenticationContext = React.createContext({});

export function AuthenticationProvider({ children }) {
  const [token, setToken] = useState('');

  const history = useHistory();

  let login = useCallback(async (userNameInput, passwordInput) => {
    try {
      const result = await fetch('http://localhost:4000/v1/user/login', {
        method: 'POST',
        body: JSON.stringify({
          userName: userNameInput,
          password: passwordInput,
        }),
        headers: {
          'Content-Type': 'application/json',
          'x-auth-msg': token,
        },
      });

      if (!result.ok) {
        throw result.json();
      }

      setToken(result.headers.get('x-auth-msg'));
      console.log('login token', token);

      await result.json();

      history.replace('/messenger');
    } catch {
      console.log('Incorrect email or password');
    }
  });

  return (
    <AuthenticationContext.Provider value={{ login, token }}>
      {children}
    </AuthenticationContext.Provider>
  );
}

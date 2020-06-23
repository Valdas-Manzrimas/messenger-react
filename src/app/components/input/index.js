import React from 'react';
import './index.scss';

function Input({ type, name, children, htmlFor }) {
  return (
    <React.Fragment className="Input">
      <label for={htmlFor}> {children} </label>
      <input type={type} name={name} />
    </React.Fragment>
  );
}

export default Input;

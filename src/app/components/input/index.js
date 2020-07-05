import React from 'react';
import './index.scss';

function Input({ type, name, children, htmlFor, onChange }) {
  return (
    <div className="Input">
      <label htmlFor={htmlFor}> {children} </label>
      <input type={type} name={name} onChange={onChange} />
    </div>
  );
}

export default Input;

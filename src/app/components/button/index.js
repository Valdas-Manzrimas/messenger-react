import React from 'react';
import './index.scss';

import { Link } from 'react-router-dom';

function Button({ children, onClick, ...props }) {
  const Tag = props.to ? Link : props.href ? 'a' : 'button';

  return (
    <Tag className="Button" onClick={onClick}>
      {' '}
      {children}{' '}
    </Tag>
  );
}

export default Button;

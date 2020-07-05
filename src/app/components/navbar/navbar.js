import React, { useState } from 'react';
import './navbar.scss';

import Button from '../button';

function Navbar() {
  const [time, setTime] = useState('');

  let checkTime = (i) => {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  };

  let currentTime = () => {
    let d = new Date();
    let m = d.getMinutes();
    let h = d.getHours();
    let s = d.getSeconds();

    m = checkTime(m);
    h = checkTime(h);
    s = checkTime(s);

    setTime(h + ':' + m + ':' + s);
  };
  setInterval(currentTime, 1000);

  return (
    <div className="Navbar">
      <div className="navBar-left"> {time}</div>
      <div className="navBar-right">
        <span className="username"></span>
        <Button>Logout</Button>
      </div>
    </div>
  );
}

export default Navbar;

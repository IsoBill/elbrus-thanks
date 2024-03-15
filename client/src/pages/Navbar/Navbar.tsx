import React from 'react';
import './Navbar.scss';

export function Navbar(): JSX.Element {
  return (
    <div className="Navbar">
      <a href="/main">Main</a>
      <a href="/update">Update</a>
    </div>
  );
}

export default Navbar;

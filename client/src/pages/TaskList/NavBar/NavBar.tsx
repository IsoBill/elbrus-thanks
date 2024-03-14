import React from 'react';
import './NavBar.scss';

type NavBarProps = {};

export function NavBar({}: NavBarProps): JSX.Element {
  return (
    <div className="NavBar">
      <a href="/">Main</a>
      <a href="/update">Update</a>
    </div>
  );
}

export default NavBar;

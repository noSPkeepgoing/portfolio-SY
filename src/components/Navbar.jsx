import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='concerts'>Concerts</Link>
      </li>
      <li>
        <Link to='/listen'>Listen</Link>
      </li>
      <li>
        <Link to='/contact'>Contact</Link>
      </li>
    </nav>
  );
}

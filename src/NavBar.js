import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
  return (
    <div style={{ background: '#eee', display: 'flex', justifyContent: 'space-between', padding: '1rem'}}>
      <Link to="/" style={{ color: 'black', fontWeight: 'bold', textDecoration: 'none', fontSize: '1.5rem' }}>Pet Finder</Link>
      <span style={{ color: 'black', fontSize: '1rem' }}>{props.customText}</span>
    </div>
  );
}

export default NavBar;

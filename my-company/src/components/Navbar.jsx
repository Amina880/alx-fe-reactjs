import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
  const Navstyle = {
    fontSize: '22px',
    textAlign: 'center',
    paddingBottom: '20px'
  };
    return(
        <>
        <nav style={Navstyle}>
            <Link to="/">Home </Link>
            <Link to="/about">About </Link>
            <Link to="/services">Services </Link>
            <Link to="/contact">Contact </Link>
        </nav>
        </>
    );
}
export default Navbar

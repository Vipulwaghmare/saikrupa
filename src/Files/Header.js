import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Header (props){
    return(
    <header className="header">
    <h2>Sai Krupa Lunch Home</h2>
    <blockquote className="blockquote-footer pl-4">Addr: Room no. 20/4, Pawane Gaon, Navi Mumbai, 400-705</blockquote>
    <blockquote className="blockquote-footer pl-5">Phone no: 9221378273</blockquote>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <ul className="nav" >
    <Link to="/menu">
      <li className="nav-item nav-link">Menu</li>
    </Link>
      <Link to="/about">
      <li className="nav-item nav-link">About</li>
    </Link>
    <Link to="/contact">
      <li className="nav-item nav-link">Contact</li>
    </Link>
    <Link to="/cart">
      <li className="nav-item nav-link">Cart [{props.amount}]</li>
    </Link>
    </ul>
    </nav>
    </header>
    )
}

function mapStateToProps(state){
  return{
    amount: state.amount
  }
}

export default connect(mapStateToProps)(Header);
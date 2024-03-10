import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">
          <Link to="/">BerniShop</Link>
        </h1>
        <Link to="/cart" className="header-cart">
          <i className="fas fa-shopping-cart"></i> Cart
        </Link>
      </div>
    </header>
  );
};

export default header;

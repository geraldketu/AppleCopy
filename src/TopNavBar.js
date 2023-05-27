import React from 'react';
import './TopNavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const TopNavBar = () => {

  const refreshPage = () => {
    window.location.reload();
  };


  return (
    <header className="top-navbar">
      <nav className="navbar">
        <ul className="nav-items">
          <li className="nav-item">
            <a href="/" className="nav-link">
            <FontAwesomeIcon icon={faApple} className="icon-apple" onClick={refreshPage} />
            </a>
          </li>
          <li className="nav-item">
            <a href="https://www.apple.com/mac/" className="nav-link">Mac</a>
          </li>
          <li className="nav-item">
            <a href="https://www.apple.com/ipad/" className="nav-link">iPad</a>
          </li>
          <li className="nav-item">
            <a href="https://www.apple.com/iphone/" className="nav-link">iPhone</a>
          </li>
          <li className="nav-item">
            <a href="https://www.apple.com/watch/" className="nav-link">Watch</a>
          </li>
          <li className="nav-item">
            <a href="https://www.apple.com/tv-home/" className="nav-link">TV & Home</a>
          </li>
          <li className="nav-item">
            <a href="https://www.apple.com/services/" className="nav-link">Entertainment</a>
          </li>
          <li className="nav-item">
            <a href="https://www.apple.com/shop/accessories/all" className="nav-link">Accessories</a>
          </li>
          <li className="nav-item">
            <a href="https://support.apple.com/" className="nav-link">Support</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
            <FontAwesomeIcon icon={faSearch} className="icon-search" />
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
            <FontAwesomeIcon icon={faShoppingBag} className="icon-shopping-bag" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default TopNavBar;

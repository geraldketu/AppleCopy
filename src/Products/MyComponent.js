// MyComponent.jsx
import React from 'react';
import tedLassoImage from '../images/tedLassoImage.jpg';
import iphone14ProImage from '../images/Iphone14pro.jfif'; 
import appleWatchImage from '../images/AppleWatch.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faApple } from '@fortawesome/free-brands-svg-icons';
import './Components.css';

const MyComponent = () => {
  const targetURL1 = 'https://tv.apple.com/show/umc.cmc.vtoh0mn0xn7t3c643xqonfzy';
  const targetURL2 = 'https://www.apple.com/iphone-14-pro/'; 
  const targetURL3 = 'https://www.apple.com/apple-watch-series-8/'

  const handleClick1 = () => {
    window.location.href = targetURL1;
  };

  const handleClick2 = () => {
    window.location.href = targetURL2;
  };

  const handleClick3 = () => {
    window.location.href = targetURL3;
  };

  return (
    <div className="componentsContainer">
      <div className="p1" onClick={handleClick1}>
      <div className="p1-text">
        <div className="p1-text-headings">
        <h1>Ted Lasso</h1>
          </div>
          </div>
        <img src={tedLassoImage} alt="Advertisement 1" />
      </div>


      <div className="p2" onClick={handleClick2}>
      <div className="p2-text">
        <div className="p2-text-headings">
          <h1>Iphone 14 Pro</h1>
          <h2>Pro.Beyond</h2>
        </div>
        <a href="https://www.apple.com/iphone-14-pro/" className="blue-link">Learn More</a>
        <a href="https://www.apple.com/shop/buy-iphone/iphone-14-pro" className="blue-link">Buy</a>
      </div>
      <img src={iphone14ProImage} alt="Advertisement 2" />
    </div>


           
    <div className="p3" onClick={handleClick3}>
      <div className="p3-text">
        <div className="p3-text-headings">
          <h1>
            <FontAwesomeIcon icon={faApple} className="icon-apple" /> Watch
          </h1>
          <h4>Pro.Beyond</h4>
          <h2>A healthy leap ahead</h2>
        </div>
        <a href="https://www.apple.com/apple-watch-series-8/" className="blue-link">Learn More</a>
        <a href="https://www.apple.com/shop/buy-watch/apple-watch" className="blue-link">Buy</a>
      </div>
      <img src={appleWatchImage} alt="Advertisement 3" />
    </div>

     
    </div>
  );
}

export default MyComponent;

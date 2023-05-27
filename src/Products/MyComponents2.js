import React from 'react';
import './Components2.css';
import image1 from '../images/IphoneTradeIn.jfif';
import image2 from '../images/AppleWWDC.jfif';
import image3 from '../images/AppleWatchB.jfif';
import image4 from '../images/IpadproB.jfif';
import image5 from '../images/AppleHealthB.jfif';
import image6 from '../images/appleCard.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faApple } from '@fortawesome/free-brands-svg-icons';

const MyComponents2 = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  const headings = [
    ['Trade in', 'Upgrade and save. It’s that easy.'],
    ['WWDC 2023', 'Join us online June 5‑9'],
    ['Apple Watch', 'Pride is in the air.'],
    ['iPad Pro', 'Supercharged by'],
    ['Your Health Data' , 'In your Phone.'],
    ['Apple Card', 'Get up to 3% Daily Cash back with every purchase.'],
  ];

  const linkTexts = [
    ['See what your device is worth', "https://www.apple.com/shop/trade-in"],
    ['Learn More', "https://developer.apple.com/wwdc23/"],
    ['Shop the new Pride Edition Sport Band', "https://www.apple.com/shop/product/MRTL3AM/A/41mm-pride-edition-sport-band-s-m"],
    ['Learn More', 'https://www.apple.com/shop/buy-ipad/ipad-pro'],
    ['Learn More', "https://www.apple.com/ios/health/"],
    ['Learn More', 'https://www.apple.com/apple-card/apply/'],
  ];

  const links = [
    'https://www.apple.com/shop/trade-in',
    'https://developer.apple.com/wwdc23/',
    'https://www.apple.com/shop/product/MRTL3AM/A/41mm-pride-edition-sport-band-s-m',
    'https://www.apple.com/ipad-pro/',
    'https://www.apple.com/ios/health/',
    'https://www.apple.com/apple-card/',
  ];

  const ads = [];
  for(let i = 0; i < 6; i+=2) {
    ads.push(
      <div className="rowContainer" key={i / 2}>
        {[i, i + 1].map((index) => (
          <div className={`add${index + 1}`} key={index}>
            <div className={`add${index + 1}-text`}>

              <h1>{headings[index][0]}</h1>
              <h2>{headings[index][1]}</h2>
              
              {linkTexts[index][0] && <a href={linkTexts[index][1]} className="blue-link">
                {linkTexts[index][0]}
              </a>}
            </div>
            <a href={links[index]}>
              <img src={images[index]} alt={`Advertisement ${index + 1}`} />
            </a>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="components2Container">
      {ads}
    </div>
  );
}

export default MyComponents2;

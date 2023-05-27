import React, { useState, useEffect } from 'react';
import './Components6.css';
import image1 from '../images/ShrinKingAPTV.jfif';
import image2 from '../images/ServantAPTV.jfif';
import image3 from '../images/DEAPTV.jfif';
import image4 from '../images/TBTAPTV.jfif';
import image5 from '../images/LiasonAPTV.jfif';
import image6 from '../images/HelloTAPTV.jfif';
import image7 from '../images/TLAPTV.jfif';
import image8 from '../images/FAMKAPTV.jfif';

const Carousel = ({ items }) => {
  const [selected, setSelected] = useState(0);
  
  useEffect(() => {
    const handleKeydown = (event) => {
      switch(event.key) {
        case 'ArrowLeft':
          setSelected(selected > 0 ? selected - 1 : items.length - 1);
          break;
        case 'ArrowRight':
          setSelected(selected < items.length - 1 ? selected + 1 : 0);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [selected, items]);

  const handleClick = () => {
    window.open(items[selected].link, '_blank');
  };

  const handleLeftClick = () => {
    setSelected(selected > 0 ? selected - 1 : items.length - 1);
  };

  const handleRightClick = () => {
    setSelected(selected < items.length - 1 ? selected + 1 : 0);
  };
  
  return (
    <div className='carousel'>
      <div className='image-container'>
        <button onClick={handleLeftClick}>Left</button>
        <img src={items[selected].image} alt='Show poster' onClick={handleClick} />
        <button onClick={handleRightClick}>Right</button>
      </div>
      <div className='dots'>
        {items.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === selected ? 'selected' : ''}`}
            onClick={() => setSelected(i)}
          />
        ))}
      </div>
    </div>
  );
};

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

const links = [
  'https://tv.apple.com/us/show/shrinking/umc.cmc.apzybj6eqf6pzccd97kev7bs', 
  'https://tv.apple.com/us/show/servant/umc.cmc.4y25wuby7pck9o6vaubbbk7gb', 
  'https://tv.apple.com/us/show/dear-edward/umc.cmc.2rp99884b0rpc42alv86h960b', 
  'https://tv.apple.com/us/show/truth-be-told/umc.cmc.6hegr60w8pjyfcblgocjek7oo', 
  'https://www.apple.com/tv-pr/originals/liaison/', 
  'https://tv.apple.com/us/show/hello-tomorrow/umc.cmc.6lknbhv5dcfx8lfe8ghqmy4ma', 
  'https://tv.apple.com/us/show/ted-lasso/umc.cmc.vtoh0mn0xn7t3c643xqonfzy?ctx_brand=tvs.sbd.4000&mttn3pid=Bing%20Ads&mttnagencyid=a5e&mttncc=US&mttnsiteid=143238&mttnsubad=OUS2019863_2-78477846959561-c&mttnsubkw=1255642782876316__VG29FCeZ_', 
  'https://tv.apple.com/us/show/for-all-mankind/umc.cmc.6wsi780sz5tdbqcf11k76mkp7'
];

const items = images.map((image, i) => ({ image, link: links[i] }));

const MyComponents6 = () => {
  return <Carousel items={items} />;
};

export default MyComponents6;

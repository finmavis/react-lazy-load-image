// Dependencies
import React, { Fragment, useEffect } from 'react';

// Styles
import './LQIP.css';

// Images
import LowImage from '../assets/lqip/assets-1.jpeg';
import HDImage from '../assets/lqip/assets-1-hd.jpeg';

function LQIP() {
  useEffect(() => {
    const image = new Image();
    image.src = HDImage;
    image.onload = function() {
      const el = document.querySelector('.lqip-lazy');
      el.setAttribute('src', HDImage);
    };
  }, []);

  return (
    <Fragment>
      <h2 className='heading'>LQIP</h2>
      <div className='lqip-container'>
        <img
          className='lqip-lazy'
          src={LowImage}
          alt='Lazy Load LQIP Example'
        />
      </div>
    </Fragment>
  );
}

export default LQIP;

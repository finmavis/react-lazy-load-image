// Dependencies
import React, { Fragment, useEffect } from 'react';

// Images
import ImagesHD from '../assets/images/hd-version.jpg';

// Styles
import './BackgroundImage.css';

function BackgroundImage() {
  useEffect(() => {
    const image = new Image();
    image.src = ImagesHD;
    image.onload = function() {
      const el = document.querySelector('.lazy-load-container');
      el.style['background-image'] = `url(${ImagesHD})`;
    };
  }, []);

  return (
    <Fragment>
      <h2 className='heading'>Background Image</h2>
      <div className='lazy-load-container' />
    </Fragment>
  );
}

export default BackgroundImage;

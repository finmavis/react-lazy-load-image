// Dependencies
import React, { Fragment, useEffect } from 'react';

// Styles
import './Skeleton.css';

// Images
import HDImage from '../assets/skeleton/hd-images.jpg';

function Skeleton() {
  useEffect(() => {
    const image = new Image();
    image.src = HDImage;
    image.onload = function() {
      const wrapper = document.querySelector('.skeleton-container');
      wrapper.classList.remove('loading');
      const el = document.querySelector('.skeleton-lazy');
      el.setAttribute('src', HDImage);
    };
  }, []);

  return (
    <Fragment>
      <h2 className='heading'>Skeleton</h2>
      <div className='skeleton-container loading'>
        <img
          className='skeleton-lazy'
          alt='Lazy Load Skeleton'
        />
      </div>
    </Fragment>
  );
}

export default Skeleton;

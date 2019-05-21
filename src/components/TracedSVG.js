// Dependencies
import React, { Fragment, useEffect } from 'react';

// Styles
import './TracedSVG.css';

// Images
import tracedSVG from '../assets/tracedsvg/tes.svg';
import HDImage from '../assets/tracedsvg/banner.webp';

function TracedSVG() {
  useEffect(() => {
    const image = new Image();
    image.src = HDImage;
    image.onload = function() {
      const el = document.querySelector('.traced-lazy');
      el.setAttribute('src', HDImage);
    };
  }, []);

  return (
    <Fragment>
      <h2 className='heading'>Traced SVG</h2>
      <div className='traced-container'>
        <img
          className='traced-lazy'
          src={tracedSVG}
          alt='Lazy Load Traced SVG'
        />
      </div>
    </Fragment>
  );
}

export default TracedSVG;

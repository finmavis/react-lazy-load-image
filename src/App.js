// Dependencies
import React, { Fragment, useEffect } from 'react';

// Styles
import './App.css';

// Images
import ImagesHD from './assets/images/hd-version.jpg';

function App() {
  useEffect(() => {
    const image = new Image();
    image.src = ImagesHD;
    image.onload = function() {
      const el = document.querySelector('.lazy-load-container');
      el.style['background-image'] = `url(${ImagesHD})`;
      el.classList.add('loaded');
    };
  }, []);

  return (
    <Fragment>
      <h1 className='heading'>React Lazy Load Images</h1>
      <div className='lazy-load-container' />
    </Fragment>
  );
}

export default App;

// Dependencies
import React, { Fragment } from 'react';

// Styles
import './App.css';

// Images
import ImagesHD from './assets/images/iamges-hd.jpg';

function App() {
  return (
    <Fragment>
      <h1 className='heading'>React Lazy Load Images</h1>
      <div className='lazy-load-container'>
        <img src={ImagesHD} alt='Lazy Load Example' />
      </div>
    </Fragment>
  );
}

export default App;

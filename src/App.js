// Dependencies
import React, { Fragment } from 'react';

// Components
import BackgroundImage from './components/BackgroundImage';
import LQIP from './components/LQIP';
import TracedSVG from './components/TracedSVG';
import Skeleton from './components/Skeleton';

// Styles
import './App.css';

function App() {
  return (
    <Fragment>
      <h1 className='heading'>React Lazy Load Images</h1>
      <BackgroundImage />
      <LQIP />
      <TracedSVG />
      <Skeleton />
    </Fragment>
  );
}

export default App;

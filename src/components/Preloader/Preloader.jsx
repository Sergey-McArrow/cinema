import React from 'react';

import './preloader.scss';

export const Preloader = () => {
  return (
    <div className='preloader-wrapper big active'>
      <div className='spinner-layer spinner-grey '>
        <div className='circle-clipper left'>
          <div className='circle'></div>
        </div>
        <div className='gap-patch'>
          <div className='circle'></div>
        </div>
        <div className='circle-clipper right'>
          <div className='circle'></div>
        </div>
      </div>
    </div>
  );
};

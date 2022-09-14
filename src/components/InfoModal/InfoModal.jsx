import React from 'react';

const InfoModal = ({ isClicked, info }) => {
  const handleButtonClick = isOpen => {
    isClicked(!isOpen);
  };
  return (
    <div id='modal2' className='modal modal-fixed-footer' style={{ zIndex: 5 }}>
      <div className='modal-content'>
        <h4>More info</h4>
        <p>{info}</p>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          className='modal-action modal-close waves-effect waves-green btn-flat '
          onClick={handleButtonClick}
        >
          Close X
        </a>
      </div>
    </div>
  );
};

export { InfoModal };

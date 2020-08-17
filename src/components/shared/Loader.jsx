import React from 'react';

const Loader = () => (
  <img
    src='https://www.autoclenz.co.uk/autoclenz/site.nsf/images/loader-gif.gif'
    alt='Loading...'
    style={loaderStyle}
  />
);

const loaderStyle = {
  margin: 'auto',
  display: 'flex',
  width: '80px',
  justifyContent: 'center',
  alignItems: 'center',
};

export default Loader;

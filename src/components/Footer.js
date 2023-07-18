import React from 'react';

const footerStyle = {
  backgroundColor: '#f2f2f2',
  padding: '20px',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={{ textAlign: 'center' }}>&copy 2023 | Assessment Online</p>
    </footer>
  );
};

export default Footer;

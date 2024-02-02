import React from 'react';
import friendsImage from './content/friends.gif';
import { useNavigate } from 'react-router-dom';

function FirstPage() {
  const navigate = useNavigate();

  const pageStyle = {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff', // Set text color to contrast with the background
    textAlign: 'center',
  };

  const gifStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
  };

  const headerStyle = {
    fontSize: '48px', // Adjust the font size
    textShadow: '2px 2px 4px #000', // Black border
  };

  const buttonStyle = {
    padding: '20px 40px',
    fontSize: '24px',
    backgroundColor: '#3498db',
    color: '#ffffff',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px',
    textShadow: '2px 2px 4px #000',
    borderRadius: '20px', // Rounded corners
  };

  const handleButtonClick = () => {
    navigate('/second-page');
  };

  return (
    <div style={pageStyle}>
      <img src={friendsImage} alt="Friends" style={gifStyle} />
      <div style={contentStyle}>
        <h1 style={headerStyle}>You're officially on the world's hottest guy's Website.</h1>
        <button style={buttonStyle} onClick={handleButtonClick}>
          Now, Click me Cutie!!
        </button>
      </div>
    </div>
  );
}

export default FirstPage;

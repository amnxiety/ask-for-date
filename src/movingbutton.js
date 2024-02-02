import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MovingButton() {
  const navigate = useNavigate();
  const [positionNo, setPositionNo] = useState({ x: window.innerWidth / 4, y: window.innerHeight / 2 });
const [positionYes] = useState({ x: (3 * window.innerWidth) / 5, y: window.innerHeight / 2 });
// Fixed position for the "Yes" button
  const [hoverCount, setHoverCount] = useState(0);

  const handleMouseEnter = () => {
    setHoverCount((prevCount) => prevCount + 1);

    if (hoverCount >= 5) {
      // Change text after 5 hovers
      setPositionNo(generateRandomPosition());
    } else {
      // Move to a new position without changing text
      setPositionNo(generateRandomPosition());
    }
  };

  const generateRandomPosition = () => {
    const maxX = window.innerWidth - 250; // Adjust the button width
    const maxY = window.innerHeight - 150; // Adjust the button height

    return {
      x: Math.random() * maxX,
      y: Math.random() * maxY,
    };
  };

  const noButtonText = hoverCount >= 5 ? 'Yooo bitch you thought U can say no?' : 'Nope, I wont :)';
  const yesButtonText = 'Yes!';

  const buttonStyle = {
    position: 'absolute',
    cursor: 'pointer',
    transition: 'left 0.3s ease-out, top 0.3s ease-out',
    width: '250px',
    height: '150px',
    borderRadius: '50%',
    fontFamily: 'Pacifico, cursive',
    fontSize: '24px', // Adjust the font size
  };

  const noButtonStyle = {
    ...buttonStyle,
    left: positionNo.x,
    top: positionNo.y,
    background: '#ceb6a9', // Color for the "No" button
  };

  const yesButtonStyle = {
    ...buttonStyle,
    left: positionYes.x,
    top: positionYes.y,
    background: '#acc9c9', // Color for the "Yes" button
  };

  const handleYesButtonClick = () => {
    // Navigate to the "/last-page" route
    navigate('/happy-page');
  };

  return (
    <div>
      <button
        style={noButtonStyle}
        onMouseEnter={handleMouseEnter}
      >
        {noButtonText}
      </button>

      <button
        style={yesButtonStyle}
        onClick={handleYesButtonClick}
      >
        {yesButtonText}
      </button>
    </div>
  );
}

export default MovingButton;

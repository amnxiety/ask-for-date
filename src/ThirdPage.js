import MovingButton from './movingbutton';
import React, { useEffect, useState } from 'react';

function Content() {
  const bodyStyle = {
    backgroundColor: '#c8b0d0',
    margin: 0,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align content to the top
    position: 'relative',
    paddingTop: '50px', // Adjust the top padding to move the text up
  };

  const renderHearts = () => {
    const hearts = [];
    for (let i = 0; i < 20; i++) {
      hearts.push(<div key={i} className="heart" style={generateRandomPosition()} />);
    }
    return hearts;
  };

  const generateRandomPosition = () => {
    const maxX = window.innerWidth;
    const maxY = window.innerHeight;
    return {
      left: Math.random() * maxX,
      top: Math.random() * maxY,
    };
  };
  const contentContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);

  const h1Style = {
    opacity: 0,
    transform: 'translateX(-50px)',
    transition: 'opacity 2s, transform 3s',
  };
  

  return (
    <div style={bodyStyle}>
    <div style={contentContainerStyle}>
      <h1 style={{ ...h1Style, transitionDelay: '0s', opacity: animate ? 1 : 0 }}>✨ Ohh just look at your smiling face, soo beautiful, soo elegant, just looking like a WOW ✨</h1>
      <h1 style={{ ...h1Style, transitionDelay: '3s', opacity: animate ? 1 : 0 }}> They say,Ladki हँसी तो फसी,</h1>
      <h1 style={{ ...h1Style, transitionDelay: '5s', opacity: animate ? 1 : 0 }}>❤️ As, you're already smiling, Are you going to be my Valentine? ❤️</h1>
      {renderHearts()}
    </div>
    <MovingButton />
  </div>
  );
}

export default Content;

// LastPage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import kissGif from './content/kiss.gif';
import cuteGif from './content/cute.gif';
import bg from './content/bottom.gif';


function LastPage() {
  const navigate = useNavigate();
  const lastPageStyle = {
    background: `url(${bg}) center/cover no-repeat`, // Set cuteGif as background
    minHeight: '100vh',
    textAlign: 'center',
    color: '#ffffff',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
  
  const headingStyle = {
    fontSize: '36px',
    marginBottom: '20px',
    fontFamily: 'cursive', // Add your preferred cool font
    color: '#efd469', // Pink color, change it to suit your preference
    animation: 'heartbeat 1s infinite', // Add a subtle heartbeat animation
  };

  const postBoxStyle = {
    backgroundColor: '#555',
    marginTop:'70px',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    marginBottom: '20px',
    maxWidth: '700px', // Adjust as needed
  };

  const gifStyle = {
    width: '100%',
    maxWidth: '100%', // Adjust as needed
    marginBottom: '10px',
  };

  const bigButtonStyle = {
    padding: '20px 40px', // Adjust as needed
    fontSize: '20px', // Adjust as needed
    backgroundColor: '#e74c3c', // Different color
    color: '#ffffff',
    border: 'none',
    borderRadius: '15px', // Rounded corners
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const handleButtonClick = () => {
    navigate('/third-page');
  };

  const proposalStyle = {
    fontFamily: 'cursive', // Add your preferred chocolaty font // Chocolate color, change it to suit your preference
    fontSize: '24px', // Increase the font size for better readability
  };

  

  return (
    
    <div style={lastPageStyle}>
      <h1 style={headingStyle}>💍💖 My Dearest, Will You Make Me the Happiest Person Alive? 💖💍</h1>

      {/* First Post */}
      <div style={postBoxStyle}>
        <img src={cuteGif} alt="GIF 1" style={gifStyle} />
        <h2 style={proposalStyle}>Proposing you, The Sweet Way 🍫</h2>
<p style={proposalStyle}>
  Hey love, I'm sitting here, and I don't even know where to begin. Our journey has been like a crazy rollercoaster, and I wouldn't want it any other way. You know, I love the person you are and what you've turned me into (a hot gymrat yayy).

  Like, I admit, in the past, I wasn't always the best, kinda acted like a jerk on many occasions. But you stuck with me, Kudos, showing me what real love is and how it feels. In the tough times of our relationship, even when you're mad, I trust you because deep down, I know you'd never do anything to hurt me. Your love means everything to me. I have no shame getting down on my knees in front of you and a hundred other people to express my love towards you.

  I want to spend not just the next 10, 20, or 30 years, but basically all my life with you. Yeah, I get it; sometimes you find me a bit boring, but don't worry, I promise to keep you entertained (Of course, by cracking jokes on you, c'mon!) ;) Jokes aside, for real, will you be my Valentine? You're the princess of my dreams, and I can't imagine my life without you. Love you loads (from my heart and 🍆). 😘 💕
</p>
      </div>

      {/* Second Post */}
      <div style={postBoxStyle}>
        <img src={kissGif} alt="GIF 2" style={gifStyle} />
        <h2 style={proposalStyle}>If not, then the Emotional Abusor Way 🐶</h2>
        <p style={proposalStyle}>Okay so If the first way will not work then, I'll have to emotionally attack you to force you for the date, 
          I'll cry and cut myself into 1000 pieces and send that bag to your doorstep to make you realise I love you. Ohh wait,
          If I be dead then how I'll be able to send? anyways, I promise you to give the best night on 14th if you say yes. Vichari le 😈
          I love youu, ummahhh 😘
        </p>
      </div>

      {/* Button */}
      <button style={bigButtonStyle} onClick={handleButtonClick}>
        Click here to Answer
      </button>
    </div>
  );
}

export default LastPage;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SecondPage() {
  const navigate = useNavigate();

  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '' });

  useEffect(() => {
    // Dynamically add the keyframes to the head when the component mounts
    const keyframes = `
      @keyframes dramaticText {
        0% {
          transform: perspective(400px) rotateX(90deg);
          opacity: 0;
        }
        100% {
          transform: perspective(400px) rotateX(0deg);
          opacity: 1;
        }
      }
    `;

    const styleTag = document.createElement('style');
    styleTag.type = 'text/css';
    styleTag.appendChild(document.createTextNode(keyframes));
    document.head.appendChild(styleTag);

    // Cleanup function to remove the style tag when the component unmounts
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  const pageStyle = {
    backgroundColor: '#a28089',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '36px',
    marginBottom: '20px',
    color: '#fff685',
    animation: 'fadeIn 1s ease-in-out, dramaticText 2s cubic-bezier(0.68, -0.55, 0.27, 1.55) 1s forwards',
  };

  const mcqStyle = {
    marginBottom: '20px',
  };

  const mcqButtonStyle = {
    padding: '15px 30px',
    fontSize: '24px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const selectedStyle = {
    backgroundColor: '#2ecc71',
    color: '#ffffff',
  };

  const buttonStyle = {
    padding: '15px 30px',
    fontSize: '18px',
    backgroundColor: '#3498db',
    color: '#ffffff',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px',
    opacity: answers.q1 === '20/12' && answers.q2 === '4' && answers.q3 === 'Tokyo' ? 1 : 0,
    transition: 'opacity 0.5s ease-in-out',
  };

  const handleAnswer = (question, selectedOption) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: selectedOption,
    }));
  };

  const handleNextPage = () => {
    // Proceed to the third page only if all answers are correct
      navigate('/last-page');
    };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Ik you're hot, but rules are rules je follow na kare to fools.. </h1>
      <h1 style={headingStyle}>so, to move ahead, you need to show your worth..</h1>

      <div style={mcqStyle}>
        <h3 style={{ fontSize: '28px', marginBottom: '10px' }}>Question 1: On what date we kissed for the 1st time? :]</h3>
        <button
          style={{ ...mcqButtonStyle, ...(answers.q1 === '20/12' && selectedStyle) }}
          onClick={() => handleAnswer('q1', '20/12')}
        >
          20/12
        </button>
        <button
          style={{ ...mcqButtonStyle, ...(answers.q1 === '21/12' && selectedStyle) }}
          onClick={() => handleAnswer('q1', '21/12')} 
        >
          21/12
        </button>
        <button
          style={{ ...mcqButtonStyle, ...(answers.q1 === '19/12' && selectedStyle) }}
          onClick={() => handleAnswer('q1', '19/12')}
        >
          19/12
        </button>
      </div>

      <div style={mcqStyle}>
        <h3 style={{ fontSize: '28px', marginBottom: '10px' }}>Question 2: How many different cities I have lived so far?</h3>
        <button
          style={{ ...mcqButtonStyle, ...(answers.q2 === '3' && selectedStyle) }}
          onClick={() => handleAnswer('q2', '3')}
        >
          4
        </button>
        <button
          style={{ ...mcqButtonStyle, ...(answers.q2 === '5' && selectedStyle) }}
          onClick={() => handleAnswer('q2', '5')}
        >
          5
        </button>
        <button
          style={{ ...mcqButtonStyle, ...(answers.q2 === '4' && selectedStyle) }}
          onClick={() => handleAnswer('q2', '4')}
        >
          3
        </button>
      </div>

      <div style={mcqStyle}>
        <h3 style={{ fontSize: '28px', marginBottom: '10px' }}>Question 3: What Is my favourite moment with you?</h3>
        <button
          style={{ ...mcqButtonStyle, ...(answers.q3 === 'Seoul' && selectedStyle) }}
          onClick={() => handleAnswer('q3', 'Seoul')}
        >
          On terrace when we did our stuff
        </button>
        <button
          style={{ ...mcqButtonStyle, ...(answers.q3 === 'Beijing' && selectedStyle) }}
          onClick={() => handleAnswer('q3', 'Beijing')}
        >
          In Aditya Gadhwi concert
        </button>
        <button
          style={{ ...mcqButtonStyle, ...(answers.q3 === 'Tokyo' && selectedStyle) }}
          onClick={() => handleAnswer('q3', 'Tokyo')}
        >
          When U saved me from dust
        </button>
      </div>
      <h1>-</h1>
      <h1>A Button will only unlock,</h1>
      <h1>when the combination of the answers are correct 😴</h1>
      <button style={buttonStyle} onClick={handleNextPage}>
        Ahh, seems like you know me !!, Click Here,
      </button>
    </div>
  );
}

export default SecondPage;

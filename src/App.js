import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import LastPage from './LastPage';
import Happy from './Happy';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/second-page" element={<SecondPage />} />
          <Route path="/third-page" element={<ThirdPage />} />
          <Route path="/last-page" element={<LastPage />} />
          <Route path="/happy-page" element={<Happy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

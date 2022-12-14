import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home, About, Projects, Skills } from './pages/index';
import './App.css';
import { useEffect } from 'react';
import gsap from 'gsap';
import { useState } from 'react';
import CircleLoader from 'react-spinners/CircleLoader';
import Resume from './assets/resume.pdf';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      '.contact',
      { opacity: 0, y: '-50%' },
      { opacity: 1, duration: 1, y: '0%' }
    );
    gsap.fromTo('.ancore-my-resume', { opacity: 0 }, { opacity: 1 });
  }, []);

  return (
    <>
      {loading ? (
        <CircleLoader
          size={50}
          color={'#000000'}
          loading={loading}
          speedMultiplier={1.5}
          className="loader"
        />
      ) : (
        <div className="App">
          <HashRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
            <div className="contact">
              <a
                className="ancore-my-resume"
                href={Resume}
                target="_blank"
                type="application/pdf"
              >
                My Resume
              </a>
            </div>
          </HashRouter>
        </div>
      )}
    </>
  );
}

export default App;

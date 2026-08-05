import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience, { WorkExperience, Education } from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const addToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="app-shell" style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero addToast={addToast} />
        <Skills />
        <WorkExperience />
        <Projects />
        <Education />
        <Contact addToast={addToast} />
      </main>
      <Footer />
      <Toast toasts={toasts} removeToast={removeToast} />
    </div>
  );
}

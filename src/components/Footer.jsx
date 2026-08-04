import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid var(--border-color)',
      padding: '3rem 0',
      background: 'var(--bg-primary)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1.5rem'
      }}>
        {/* Brand Copyright */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <span style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
              Tanishka<span style={{ color: 'var(--accent-cyan)' }}>.marketing</span>
            </span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Tanishka Sharma. Built with GitHub Spec Kit & React.
          </p>
        </div>

        {/* Live Local Time Indicator */}
        <div className="font-mono" style={{
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
          background: 'var(--bg-card)',
          padding: '0.4rem 1rem',
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--border-color)'
        }}>
          <span>LOCAL TIME: </span>
          <span style={{ color: 'var(--accent-cyan)' }}>{time}</span>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-primary)',
            padding: '0.6rem 1.2rem',
            borderRadius: 'var(--radius-full)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            cursor: 'pointer',
            fontSize: '0.85rem',
            fontWeight: 600
          }}
        >
          Back to Top <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}

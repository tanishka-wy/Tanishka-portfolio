import React from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 700,
    color: 'var(--text-primary)',
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    textAlign: 'left',
    margin: 0
  };

  return (
    <div id="skills" style={{ overflow: 'visible' }}>
      <div className="section-header" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
        <h2 className="section-title" style={headingStyle}>Skills</h2>
      </div>

      {/* Skills Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: '1.2rem'
      }}>
        {skillsData.map((skill) => (
          <div
            key={skill.name}
            className="glass-card"
            style={{
              padding: '1.2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem'
            }}
          >
            <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
              {skill.name}
            </div>

            {/* Tag-style Pills Row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {skill.bullets.map((bullet) => (
                <span
                  key={bullet}
                  style={{
                    padding: '0.25rem 0.65rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: 'var(--accent-indigo)',
                    fontSize: '0.78rem',
                    fontWeight: 600
                  }}
                >
                  {bullet}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import { Sparkles, Palette, TrendingUp } from 'lucide-react';
import { skillsCategoriesData } from '../data/portfolioData';

const iconMap = {
  Sparkles: Sparkles,
  Palette: Palette,
  TrendingUp: TrendingUp
};

export default function Skills() {
  return (
    <div id="skills" style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'visible' }}>
      <div className="section-header" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
        <h2 className="section-title">Skills</h2>
      </div>

      {/* 3 Categorized Cards Timeline Container */}
      <div style={{
        position: 'relative',
        paddingLeft: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.2rem',
        flex: 1,
        justifyContent: 'space-between'
      }}>
        {/* Vertical Connecting Line matching Work Experience */}
        <div style={{
          position: 'absolute',
          top: '1rem',
          bottom: '1rem',
          left: '12px',
          width: '2px',
          background: 'linear-gradient(180deg, var(--accent-cyan) 0%, var(--accent-indigo) 100%)'
        }} />

        {skillsCategoriesData.map((category) => {
          const IconComponent = iconMap[category.icon] || Sparkles;
          return (
            <div key={category.id} style={{ position: 'relative' }}>
              {/* Glowing Dot Marker matching Work Experience */}
              <div style={{
                position: 'absolute',
                left: '-2.5rem',
                top: '1.4rem',
                marginLeft: '12px',
                transform: 'translateX(-50%)',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                background: 'var(--accent-cyan)',
                border: '3px solid var(--bg-primary)',
                boxShadow: '0 0 12px var(--accent-cyan)',
                zIndex: 2
              }} />

              <div
                className="glass-card"
                style={{
                  padding: '1.2rem 1.4rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.8rem',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-lg)'
                }}
              >
                {/* Card Header with Icon */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(34, 211, 238, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)',
                    border: '1px solid rgba(34, 211, 238, 0.25)',
                    flexShrink: 0
                  }}>
                    <IconComponent size={18} />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', margin: 0, fontWeight: 700 }}>
                    {category.title}
                  </h3>
                </div>

                {/* Tag / Pill List with Subtle Hover Animations */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        padding: '0.35rem 0.75rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px) scale(1.04)';
                        e.currentTarget.style.background = 'rgba(34, 211, 238, 0.14)';
                        e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                        e.currentTarget.style.color = 'var(--accent-cyan)';
                        e.currentTarget.style.boxShadow = '0 6px 16px rgba(34, 211, 238, 0.25)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.borderColor = 'var(--border-color)';
                        e.currentTarget.style.color = 'var(--text-primary)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Cpu, Code2, Server, Box, CheckCircle2, Sparkles } from 'lucide-react';
import { skillCategories, skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Capabilities</h2>
          <p className="section-subtitle">
            A comprehensive matrix of technologies, frameworks, and engineering practices I utilize.
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.6rem',
          marginBottom: '3rem'
        }}>
          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.5rem 1.2rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid',
                borderColor: activeCategory === cat ? 'var(--accent-cyan)' : 'var(--border-color)',
                background: activeCategory === cat ? 'rgba(34, 211, 238, 0.15)' : 'var(--bg-card)',
                color: activeCategory === cat ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {filteredSkills.map((skill, index) => (
            <div key={skill.name} className="glass-card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                <span style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                  {skill.name}
                </span>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-cyan)' }}>
                  {skill.level}%
                </span>
              </div>

              {/* Progress Meter Bar */}
              <div style={{
                height: '6px',
                width: '100%',
                background: 'var(--border-color)',
                borderRadius: 'var(--radius-full)',
                overflow: 'hidden',
                marginBottom: '0.8rem'
              }}>
                <div style={{
                  height: '100%',
                  width: `${skill.level}%`,
                  background: 'var(--gradient-primary)',
                  borderRadius: 'var(--radius-full)',
                  transition: 'width 1s ease-out'
                }} />
              </div>

              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                {skill.highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

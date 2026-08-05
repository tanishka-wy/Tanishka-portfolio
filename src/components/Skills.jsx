import React from 'react';
import { Cpu, Sparkles, Code2, FolderPlus, Server, Box, CheckCircle2, Database, FileCode2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  Cpu: Cpu,
  Sparkles: Sparkles,
  Code2: Code2,
  FolderPlus: FolderPlus,
  Server: Server,
  Box: Box,
  CheckCircle2: CheckCircle2,
  Database: Database,
  FileCode2: FileCode2
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '1.5rem' }}>
          <h2 className="section-title">Skills</h2>
        </div>

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {skillsData.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Sparkles;
            return (
              <div
                key={skill.name}
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.8rem'
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '1.08rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <IconComponent size={20} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
                  <span>{skill.name}</span>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

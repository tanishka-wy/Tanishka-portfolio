import React from 'react';
import { Cpu, Sparkles, Code2, FolderPlus, Server, Box, CheckCircle2, Database, FileCode2, CheckCircle } from 'lucide-react';
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
    <div id="skills" style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'visible' }}>
      <div className="section-header" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
        <h2 className="section-title">Skills</h2>
      </div>

      {/* Skills Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: '1.2rem'
      }}>
        {skillsData.map((skill) => {
          const IconComponent = iconMap[skill.icon] || Sparkles;
          return (
            <div
              key={skill.name}
              className="glass-card"
              style={{
                padding: '1.2rem 1.4rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem'
              }}
            >
              {/* Header matching Work Experience */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <IconComponent size={18} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', margin: 0, fontWeight: 700 }}>
                  {skill.name}
                </h3>
              </div>

              {/* Bullets List matching Work Experience achievements */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {skill.bullets.map((bullet, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    fontSize: '0.86rem',
                    color: 'var(--text-secondary)'
                  }}>
                    <CheckCircle size={14} color="var(--accent-cyan)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

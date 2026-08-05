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

      {/* Single Glass Card Containing All Skills */}
      <div
        className="glass-card"
        style={{
          padding: '1.8rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.4rem',
          flex: 1
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.2rem'
        }}>
          {skillsData.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Sparkles;
            return (
              <div key={skill.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <IconComponent size={16} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
                  <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                    {skill.name}
                  </h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', paddingLeft: '1.3rem' }}>
                  {skill.bullets.map((bullet, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle size={12} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

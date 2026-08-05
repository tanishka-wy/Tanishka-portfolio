import React from 'react';
import { Cpu, Sparkles, Code2, FolderPlus, Server, Box, CheckCircle2, Database, FileCode2 } from 'lucide-react';
import { groupedSkillsData } from '../data/portfolioData';

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

      {/* Single Glass Card Containing Grouped Skills */}
      <div
        className="glass-card"
        style={{
          padding: '1.8rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.4rem',
          flex: 1,
          justifyContent: 'space-between'
        }}
      >
        {groupedSkillsData.map((group) => (
          <div key={group.categoryNumber} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div style={{
              fontSize: '0.85rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--accent-cyan)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              paddingBottom: '0.4rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{
                background: 'rgba(34, 211, 238, 0.15)',
                color: 'var(--accent-cyan)',
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.78rem',
                fontWeight: 700
              }}>
                {group.categoryNumber}
              </span>
              {group.categoryTitle}
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '0.9rem'
            }}>
              {group.skills.map((skill) => {
                const IconComponent = iconMap[skill.icon] || Sparkles;
                return (
                  <div key={skill.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <IconComponent size={15} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {skill.name}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', margin: 0, paddingLeft: '1.2rem', lineHeight: 1.4 }}>
                      {skill.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

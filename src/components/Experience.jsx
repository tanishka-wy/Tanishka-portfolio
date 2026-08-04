import React from 'react';
import { Calendar, MapPin, CheckCircle, ExternalLink } from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';

export default function Experience() {
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
    <section id="experience" className="section-padding" style={{ overflow: 'visible', height: 'auto', minHeight: 'auto' }}>
      <div className="container" style={{ overflow: 'visible' }}>
        {/* Side-by-Side 2-Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'start',
          overflow: 'visible',
          height: 'auto'
        }}>
          {/* Left Column: Education */}
          <div style={{ overflow: 'visible' }}>
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              <h2 className="section-title" style={headingStyle}>Education</h2>
            </div>

            {/* Education Vertical Timeline */}
            <div style={{
              position: 'relative',
              paddingLeft: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              overflow: 'visible'
            }}>
              {/* Vertical Connecting Line */}
              <div style={{
                position: 'absolute',
                top: '0.8rem',
                bottom: '0.8rem',
                left: '12px',
                width: '2px',
                background: 'linear-gradient(180deg, var(--accent-cyan) 0%, var(--accent-indigo) 100%)'
              }} />

              {educationData.map((edu, index) => (
                <div key={index} style={{ position: 'relative' }}>
                  {/* Glowing Dot Marker */}
                  <div style={{
                    position: 'absolute',
                    left: '-2.5rem',
                    top: '1.1rem',
                    marginLeft: '12px',
                    transform: 'translateX(-50%)',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: 'var(--accent-cyan)',
                    border: '2px solid var(--bg-primary)',
                    boxShadow: '0 0 10px var(--accent-cyan)',
                    zIndex: 2
                  }} />

                  {/* Compact Card Container */}
                  <div
                    className="glass-card"
                    style={{
                      padding: '0.85rem 1.2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.35rem'
                    }}
                  >
                    {/* Header Row: Degree (Left) & Pass Year (Right) */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '0.8rem'
                    }}>
                      <h3 style={{
                        fontSize: '1.05rem',
                        color: 'var(--text-primary)',
                        fontWeight: 700,
                        margin: 0,
                        lineHeight: 1.3
                      }}>
                        {edu.degree}
                      </h3>

                      {/* Pass Year Badge */}
                      <span style={{
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        color: 'var(--accent-cyan)',
                        background: 'rgba(34, 211, 238, 0.12)',
                        border: '1px solid rgba(34, 211, 238, 0.3)',
                        padding: '0.18rem 0.6rem',
                        borderRadius: 'var(--radius-full)',
                        whiteSpace: 'nowrap',
                        flexShrink: 0
                      }}>
                        Pass Year: {edu.passYear}
                      </span>
                    </div>

                    <div style={{
                      fontSize: '0.88rem',
                      color: 'var(--accent-indigo)',
                      fontWeight: 600,
                      lineHeight: 1.3
                    }}>
                      {edu.institution}
                    </div>

                    {/* Skill Tags */}
                    {edu.skills && edu.skills.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.2rem' }}>
                        {edu.skills.map((skill) => (
                          <span
                            key={skill}
                            style={{
                              padding: '0.25rem 0.65rem',
                              borderRadius: 'var(--radius-sm)',
                              background: 'rgba(255, 255, 255, 0.05)',
                              color: 'var(--accent-indigo)',
                              fontSize: '0.78rem',
                              fontWeight: 600
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Work Experience */}
          <div style={{ overflow: 'visible' }}>
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              <h2 className="section-title" style={headingStyle}>Work Experience</h2>
            </div>

            {/* Work Experience Vertical Timeline */}
            <div style={{
              position: 'relative',
              paddingLeft: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.8rem',
              overflow: 'visible'
            }}>
              {/* Vertical Connecting Line */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                bottom: '1rem',
                left: '12px',
                width: '2px',
                background: 'linear-gradient(180deg, var(--accent-cyan) 0%, var(--accent-indigo) 100%)'
              }} />

              {experienceData.map((exp, index) => (
                <div key={index} style={{ position: 'relative' }}>
                  {/* Glowing Dot Marker */}
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
                      padding: '1.5rem 1.8rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.8rem'
                    }}
                  >
                    {/* Header */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: '0.8rem'
                    }}>
                      <div>
                        <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                          {exp.role}
                        </h3>
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            fontSize: '0.98rem',
                            fontWeight: 600,
                            color: 'var(--accent-cyan)',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.3rem'
                          }}
                        >
                          {exp.company} <ExternalLink size={14} />
                        </a>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.2rem' }}>
                        <span style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontSize: '0.85rem',
                          color: 'var(--text-muted)'
                        }}>
                          <Calendar size={14} /> {exp.period}
                        </span>
                        <span style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontSize: '0.8rem',
                          color: 'var(--text-muted)'
                        }}>
                          <MapPin size={12} /> {exp.location}
                        </span>
                      </div>
                    </div>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', margin: 0, lineHeight: 1.6 }}>
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {exp.achievements.map((item, idx) => (
                        <div key={idx} style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.6rem',
                          fontSize: '0.86rem',
                          color: 'var(--text-secondary)'
                        }}>
                          <CheckCircle size={15} color="var(--accent-cyan)" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.2rem' }}>
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          style={{
                            padding: '0.25rem 0.65rem',
                            borderRadius: 'var(--radius-sm)',
                            background: 'rgba(255, 255, 255, 0.05)',
                            color: 'var(--accent-indigo)',
                            fontSize: '0.78rem',
                            fontWeight: 600
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

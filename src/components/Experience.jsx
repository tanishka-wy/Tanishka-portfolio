import React from 'react';
import { CircleDot, Calendar, MapPin, CheckCircle, ExternalLink } from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';

export default function Experience() {
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
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Education & Academic Background</h2>
              <p className="section-subtitle" style={{ textAlign: 'left', margin: 0 }}>
                Academic qualifications, board performance, and degree accomplishments.
              </p>
            </div>

            {/* Education Vertical Timeline */}
            <div style={{
              position: 'relative',
              paddingLeft: '3rem',
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
                left: '15px',
                width: '2px',
                background: 'linear-gradient(180deg, var(--accent-cyan) 0%, var(--accent-indigo) 100%)'
              }} />

              {educationData.map((edu, index) => (
                <div key={index} style={{ position: 'relative' }}>
                  {/* Bullet Point Marker */}
                  <div style={{
                    position: 'absolute',
                    left: '-3rem',
                    top: '1.2rem',
                    marginLeft: '15px',
                    transform: 'translateX(-50%)',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: 'var(--bg-primary)',
                    border: '2px solid var(--accent-cyan)',
                    boxShadow: 'var(--shadow-glow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)',
                    zIndex: 2
                  }}>
                    <CircleDot size={14} />
                  </div>

                  {/* Card Container */}
                  <div
                    className="glass-card"
                    style={{
                      padding: '1.4rem 1.6rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.45rem'
                    }}
                  >
                    {/* Top Row: Period (Left) & Pass Year (Right) */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      marginBottom: '0.2rem'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.85rem',
                        color: 'var(--accent-cyan)',
                        fontWeight: 600
                      }}>
                        <Calendar size={14} />
                        <span>{edu.period}</span>
                      </div>

                      {/* Pass Year on Top Right */}
                      <div style={{
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: 'var(--accent-cyan)',
                        background: 'rgba(34, 211, 238, 0.12)',
                        border: '1px solid rgba(34, 211, 238, 0.3)',
                        padding: '0.2rem 0.65rem',
                        borderRadius: 'var(--radius-full)'
                      }}>
                        Pass Year: {edu.passYear}
                      </div>
                    </div>

                    <h3 style={{
                      fontSize: '1.2rem',
                      color: 'var(--text-primary)',
                      fontWeight: 700,
                      margin: 0,
                      lineHeight: 1.3
                    }}>
                      {edu.degree}
                    </h3>

                    <div style={{
                      fontSize: '0.92rem',
                      color: 'var(--accent-indigo)',
                      fontWeight: 600,
                      lineHeight: 1.4
                    }}>
                      {edu.institution}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Work Experience */}
          <div style={{ overflow: 'visible' }}>
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Work Experience</h2>
              <p className="section-subtitle" style={{ textAlign: 'left', margin: 0 }}>
                Hands-on digital marketing agency training, client SEO strategies, and content growth.
              </p>
            </div>

            {/* Work Experience Vertical Timeline */}
            <div style={{
              position: 'relative',
              paddingLeft: '3rem',
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
                left: '15px',
                width: '2px',
                background: 'linear-gradient(180deg, var(--accent-cyan) 0%, var(--accent-indigo) 100%)'
              }} />

              {experienceData.map((exp, index) => (
                <div key={index} style={{ position: 'relative' }}>
                  {/* Bullet Point Marker */}
                  <div style={{
                    position: 'absolute',
                    left: '-3rem',
                    top: '1.2rem',
                    marginLeft: '15px',
                    transform: 'translateX(-50%)',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: 'var(--bg-primary)',
                    border: '2px solid var(--accent-cyan)',
                    boxShadow: 'var(--shadow-glow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)',
                    zIndex: 2
                  }}>
                    <CircleDot size={14} />
                  </div>

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

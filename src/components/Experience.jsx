import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, ExternalLink, GraduationCap, Award } from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        {/* Side-by-Side 2-Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'start'
        }}>
          {/* Left Column: Education */}
          <div>
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Education & Academic Background</h2>
              <p className="section-subtitle" style={{ textAlign: 'left', margin: 0 }}>
                Academic qualifications, board performance, and degree accomplishments.
              </p>
            </div>

            {/* Education Vertical Timeline */}
            <div style={{
              position: 'relative',
              paddingLeft: '2.5rem'
            }}>
              {/* Vertical Connecting Line */}
              <div style={{
                position: 'absolute',
                top: '0.8rem',
                bottom: '1rem',
                left: '15px',
                width: '2px',
                background: 'linear-gradient(180deg, var(--accent-cyan) 0%, var(--accent-indigo) 100%)'
              }} />

              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className="glass-card"
                  style={{
                    marginBottom: '2rem',
                    padding: '1.6rem',
                    position: 'relative'
                  }}
                >
                  {/* Graduation Cap Circular Icon Badge Marker */}
                  <div style={{
                    position: 'absolute',
                    left: '16px',
                    top: '1.6rem',
                    transform: 'translateX(-50%)',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    background: 'var(--bg-primary)',
                    border: '2px solid var(--accent-cyan)',
                    boxShadow: 'var(--shadow-glow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)'
                  }}>
                    <GraduationCap size={15} />
                  </div>

                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                    {edu.period}
                  </span>

                  <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', margin: '0.3rem 0 0.4rem 0' }}>
                    {edu.degree}
                  </h3>

                  <div style={{ fontSize: '0.92rem', color: 'var(--accent-indigo)', fontWeight: 600, marginBottom: '0.6rem' }}>
                    {edu.institution}
                  </div>

                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: 'var(--accent-emerald)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    marginBottom: '0.8rem'
                  }}>
                    <Award size={14} /> {edu.score}
                  </div>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Work Experience */}
          <div>
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Work Experience</h2>
              <p className="section-subtitle" style={{ textAlign: 'left', margin: 0 }}>
                Hands-on digital marketing agency training, client SEO strategies, and content growth.
              </p>
            </div>

            {/* Work Experience Vertical Timeline */}
            <div style={{
              position: 'relative',
              paddingLeft: '2.5rem'
            }}>
              {/* Vertical Connecting Line */}
              <div style={{
                position: 'absolute',
                top: '0.8rem',
                bottom: '1rem',
                left: '15px',
                width: '2px',
                background: 'linear-gradient(180deg, var(--accent-cyan) 0%, var(--accent-indigo) 100%)'
              }} />

              {experienceData.map((exp, index) => (
                <div
                  key={index}
                  className="glass-card"
                  style={{
                    marginBottom: '2rem',
                    padding: '1.6rem',
                    position: 'relative'
                  }}
                >
                  {/* Briefcase Icon Marker */}
                  <div style={{
                    position: 'absolute',
                    left: '16px',
                    top: '1.6rem',
                    transform: 'translateX(-50%)',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    background: 'var(--bg-primary)',
                    border: '2px solid var(--accent-cyan)',
                    boxShadow: 'var(--shadow-glow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)'
                  }}>
                    <Briefcase size={15} />
                  </div>

                  {/* Header */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '0.8rem',
                    marginBottom: '0.8rem'
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
                          fontSize: '1rem',
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

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1rem', lineHeight: 1.6 }}>
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div style={{ marginBottom: '1rem' }}>
                    {exp.achievements.map((item, idx) => (
                      <div key={idx} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.6rem',
                        fontSize: '0.86rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '0.4rem'
                      }}>
                        <CheckCircle size={15} color="var(--accent-cyan)" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

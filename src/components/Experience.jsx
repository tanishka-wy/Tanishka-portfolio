import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, ExternalLink, GraduationCap, Award } from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        {/* Work Experience Header */}
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Hands-on digital marketing agency training, client SEO strategies, and content growth.
          </p>
        </div>

        {/* Work Experience Timeline */}
        <div style={{
          maxWidth: '850px',
          margin: '0 auto 5rem auto',
          position: 'relative',
          paddingLeft: '2rem'
        }}>
          {/* Vertical Line */}
          <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '7px',
            width: '2px',
            background: 'linear-gradient(180deg, var(--accent-cyan) 0%, var(--accent-indigo) 100%)'
          }} />

          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="glass-card"
              style={{
                marginBottom: '2rem',
                padding: '1.8rem',
                position: 'relative'
              }}
            >
              {/* Timeline Dot */}
              <div style={{
                position: 'absolute',
                left: '-2.4rem',
                top: '1.8rem',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: 'var(--accent-cyan)',
                border: '3px solid var(--bg-primary)',
                boxShadow: 'var(--shadow-glow)'
              }} />

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
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                    {exp.role}
                  </h3>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: '1.05rem',
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

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.2rem' }}>
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

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.2rem', lineHeight: 1.6 }}>
                {exp.description}
              </p>

              {/* Achievements */}
              <div style={{ marginBottom: '1.2rem' }}>
                {exp.achievements.map((item, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.6rem',
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '0.4rem'
                  }}>
                    <CheckCircle size={15} color="var(--accent-cyan)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
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

        {/* Education Header & Section */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <h2 className="section-title">Education & Academic Background</h2>
          <p className="section-subtitle">
            Academic qualifications, board performance, and degree accomplishments.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          maxWidth: '950px',
          margin: '0 auto'
        }}>
          {educationData.map((edu, index) => (
            <div key={index} className="glass-card" style={{ padding: '1.8rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(34, 211, 238, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-cyan)',
                marginBottom: '1rem'
              }}>
                <GraduationCap size={22} />
              </div>

              <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                {edu.period}
              </span>

              <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', margin: '0.3rem 0 0.5rem 0' }}>
                {edu.degree}
              </h3>

              <div style={{ fontSize: '0.9rem', color: 'var(--accent-indigo)', fontWeight: 600, marginBottom: '0.6rem' }}>
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

              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {edu.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

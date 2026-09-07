import React from 'react';
import { ArrowRight, Sparkles, Mail, Linkedin, Github, MessageSquare, Megaphone, Award, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ addToast }) {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    addToast('Email copied to clipboard!', 'success');
  };

  return (
    <section id="hero" className="section-padding" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      paddingTop: '8rem',
      background: 'var(--gradient-glow)'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '3.5rem',
        alignItems: 'center'
      }}>
        {/* Main Introduction Column */}
        <div>
          {/* Availability Status Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.4rem 1rem',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            color: 'var(--accent-emerald)',
            fontSize: '0.85rem',
            fontWeight: 600,
            marginBottom: '1.5rem'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--accent-emerald)',
              boxShadow: '0 0 10px var(--accent-emerald)'
            }} />
            {personalInfo.status}
          </div>

          <h1 style={{ fontSize: '3rem', marginBottom: '0.8rem', lineHeight: 1.1 }}>
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <h2 style={{ fontSize: '1.35rem', fontWeight: 600, color: 'var(--accent-cyan)', marginBottom: '1.5rem', lineHeight: 1.4 }}>
            {personalInfo.tagline}
          </h2>

          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            marginBottom: '2rem',
            maxWidth: '580px',
            lineHeight: 1.7
          }}>
            {personalInfo.bio}
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
            <button onClick={handleCopyEmail} className="btn btn-primary" title="Copy Email">
              <Mail size={18} /> Contact Tanishka
            </button>
            <a href={personalInfo.socials.whatsapp} target="_blank" rel="noreferrer" className="btn btn-secondary">
              <MessageSquare size={18} color="var(--accent-emerald)" /> WhatsApp Chat
            </a>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>CONNECT:</span>
            <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" style={{
              color: 'var(--accent-cyan)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontWeight: 600,
              fontSize: '0.9rem',
              textDecoration: 'none'
            }}>
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" style={{
              color: 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontWeight: 600,
              fontSize: '0.9rem',
              textDecoration: 'none'
            }}>
              <Github size={20} /> GitHub
            </a>
          </div>
        </div>

        {/* Hero Profile Photo & Card */}
        <div className="glass-card animate-float" style={{
          padding: '2rem',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          {/* Profile Image Avatar Container */}
          <div style={{
            position: 'relative',
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            padding: '5px',
            background: 'var(--gradient-primary)',
            boxShadow: 'var(--shadow-glow)',
            marginBottom: '1.5rem'
          }}>
            <img
              src="/assets/profile.jpg"
              alt="Tanishka Sharma"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '5px',
              right: '5px',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--accent-cyan)',
              borderRadius: '50%',
              padding: '0.4rem',
              color: 'var(--accent-cyan)'
            }}>
              <Sparkles size={16} />
            </div>
          </div>

          <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
            {personalInfo.name}
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '0.8rem' }}>
            {personalInfo.role}
          </p>

          <div style={{
            fontSize: '0.82rem',
            color: 'var(--text-secondary)',
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '0.6rem 1rem',
            borderRadius: 'var(--radius-md)',
            marginBottom: '1.5rem',
            width: '100%'
          }}>
            🎓 <a href="https://www.bhu.ac.in/Site/Home/1_2_16_Main-Site" target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px dotted var(--accent-cyan)' }}><strong>BHU Graduate (2024)</strong></a> • 🏢 <a href="https://techpath.biz/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px dotted var(--accent-cyan)' }}><strong>Techpath R&D Intern</strong></a>
          </div>

          {/* Quick Metrics Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem',
            width: '100%',
            paddingTop: '1rem',
            borderTop: '1px solid var(--border-color)'
          }}>
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>
                SEO
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Optimization
              </div>
            </div>
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-indigo)' }}>
                AI
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Content Specialist
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Cpu, Sparkles, Code2, FolderPlus, Server, Box, CheckCircle2, Database, FileCode2, X, ChevronLeft, ChevronRight, FileText } from 'lucide-react';
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
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const openSkillModal = (skill) => {
    if (skill.interactive || skill.slides) {
      setSelectedSkill(skill);
      setActiveSlide(0);
    }
  };

  const closeSkillModal = () => {
    setSelectedSkill(null);
    setActiveSlide(0);
  };

  const nextSlide = () => {
    if (selectedSkill?.slides) {
      setActiveSlide((prev) => (prev + 1) % selectedSkill.slides.length);
    }
  };

  const prevSlide = () => {
    if (selectedSkill?.slides) {
      setActiveSlide((prev) => (prev - 1 + selectedSkill.slides.length) % selectedSkill.slides.length);
    }
  };

  return (
    <div id="skills" style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'visible' }}>
      <div className="section-header" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
        <h2 className="section-title">Skills</h2>
      </div>

      {/* Skills Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
        gap: '0.75rem'
      }}>
          {skillsData.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Sparkles;
            const isClickable = skill.interactive || skill.slides;
            return (
              <div
                key={skill.name}
                className="glass-card"
                onClick={() => isClickable && openSkillModal(skill)}
                style={{
                  padding: '0.85rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  cursor: isClickable ? 'pointer' : 'default',
                  border: isClickable ? '1px solid rgba(34, 211, 238, 0.4)' : '1px solid var(--border-color)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  if (isClickable) {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(34, 211, 238, 0.2)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (isClickable) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.4rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', minWidth: 0 }}>
                    <IconComponent size={16} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
                    <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{skill.name}</span>
                  </div>
                  {isClickable && (
                    <span style={{ fontSize: '0.68rem', padding: '0.1rem 0.4rem', borderRadius: 'var(--radius-full)', background: 'rgba(34, 211, 238, 0.15)', color: 'var(--accent-cyan)', fontWeight: 600, flexShrink: 0 }}>
                      Deck ↗
                    </span>
                  )}
                </div>

                {/* Tag-style Pills Row */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                  {skill.bullets.map((bullet) => (
                    <span
                      key={bullet}
                      style={{
                        padding: '0.15rem 0.45rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: 'var(--accent-indigo)',
                        fontSize: '0.72rem',
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

      {/* Interactive Presentation Modal for Skills */}
      {selectedSkill && selectedSkill.slides && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(9, 13, 22, 0.85)',
            backdropFilter: 'blur(10px)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={closeSkillModal}
        >
          <div
            className="glass-card"
            style={{
              width: '100%',
              maxWidth: '750px',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '2rem',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              border: '1px solid var(--accent-cyan)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeSkillModal}
              aria-label="Close modal"
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: 'var(--text-primary)',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div>
              <span style={{
                padding: '0.25rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(34, 211, 238, 0.15)',
                color: 'var(--accent-cyan)',
                fontSize: '0.8rem',
                fontWeight: 600
              }}>
                {selectedSkill.name} — Interactive AI Presentation
              </span>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '0.6rem', marginBottom: '0.3rem' }}>
                Meta Ads Policy 2026 Compliance Guide
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', margin: 0 }}>
                10-slide interactive presentation deck generated using Gamma AI Presentation Tool.
              </p>
            </div>

            {/* Interactive Slide Viewer */}
            <div style={{
              background: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-md)',
              padding: '1.5rem',
              border: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              position: 'relative'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Sparkles size={16} /> Slide {activeSlide + 1} of {selectedSkill.slides.length} — {selectedSkill.slides[activeSlide].subtitle}
                </span>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    onClick={prevSlide}
                    className="btn btn-secondary"
                    style={{ padding: '0.35rem 0.7rem', fontSize: '0.8rem' }}
                  >
                    <ChevronLeft size={16} /> Prev
                  </button>
                  <button
                    onClick={nextSlide}
                    className="btn btn-primary"
                    style={{ padding: '0.35rem 0.7rem', fontSize: '0.8rem' }}
                  >
                    Next <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              <div style={{
                padding: '1.2rem',
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius-sm)',
                borderLeft: '4px solid var(--accent-cyan)'
              }}>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
                  {selectedSkill.slides[activeSlide].title}
                </h3>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', whiteSpace: 'pre-line', lineHeight: 1.6 }}>
                  {selectedSkill.slides[activeSlide].content}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem' }}>
              {selectedSkill.pdfUrl && (
                <a
                  href={selectedSkill.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ gap: '0.5rem' }}
                >
                  <FileText size={16} /> Open Full PDF Presentation
                </a>
              )}
              <button onClick={closeSkillModal} className="btn btn-secondary">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

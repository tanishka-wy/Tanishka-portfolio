import React, { useState } from 'react';
import { Award, ExternalLink, X, ChevronLeft, ChevronRight, FileText, Sparkles, Download, Eye } from 'lucide-react';
import { projectsData, projectCategories } from '../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const openProject = (project) => {
    setSelectedProject(project);
    setActiveSlide(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setActiveSlide(0);
  };

  const nextSlide = () => {
    if (selectedProject?.slides) {
      setActiveSlide((prev) => (prev + 1) % selectedProject.slides.length);
    }
  };

  const prevSlide = () => {
    if (selectedProject?.slides) {
      setActiveSlide((prev) => (prev - 1 + selectedProject.slides.length) % selectedProject.slides.length);
    }
  };

  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '1.5rem' }}>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        {/* Category Filter Tabs */}
        {projectCategories && projectCategories.length > 0 && (
          <div style={{
            display: 'flex',
            gap: '0.6rem',
            flexWrap: 'wrap',
            marginBottom: '2rem',
            justifyContent: 'center'
          }}>
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '0.45rem 1.1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: '1px solid',
                  borderColor: selectedCategory === category ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.1)',
                  background: selectedCategory === category ? 'rgba(34, 211, 238, 0.15)' : 'var(--bg-card)',
                  color: selectedCategory === category ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                  transition: 'all 0.2s ease'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem'
        }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              onClick={() => openProject(project)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(34, 211, 238, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Image Preview Container */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '160px',
                overflow: 'hidden',
                background: 'var(--bg-secondary)'
              }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '0.8rem',
                  right: '0.8rem',
                  background: 'rgba(9, 13, 22, 0.85)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.25rem 0.7rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--accent-cyan)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  {project.category}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.2rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>{project.title}</span>
                  <ExternalLink size={16} color="var(--accent-cyan)" />
                </h3>

                <p style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                  margin: 0
                }}>
                  {project.summary}
                </p>

                {/* Impact Metric */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  color: 'var(--accent-emerald)',
                  fontWeight: 600
                }}>
                  <Award size={14} /> {project.metrics}
                </div>

                {/* Tech Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.2rem' }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Project Modal */}
      {selectedProject && (
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
          onClick={closeProject}
        >
          <div
            className="glass-card"
            style={{
              width: '100%',
              maxWidth: '780px',
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
              onClick={closeProject}
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
                {selectedProject.category}
              </span>
              <h2 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginTop: '0.5rem', marginBottom: '0.4rem' }}>
                {selectedProject.title}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                {selectedProject.description}
              </p>
            </div>

            {/* Embedded PDF Viewer */}
            {selectedProject.pdfUrl && (
              <div style={{
                background: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <FileText size={16} /> PDF Document Preview
                  </span>
                  <a
                    href={selectedProject.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                    style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                  >
                    <ExternalLink size={14} /> Open Full PDF
                  </a>
                </div>
                <div style={{ width: '100%', height: '380px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <iframe
                    src={`${selectedProject.pdfUrl}#toolbar=0`}
                    title={selectedProject.title}
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                  />
                </div>
              </div>
            )}

            {/* Interactive Slide Viewer (For Presentations) */}
            {selectedProject.slides && selectedProject.slides.length > 0 && (
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
                    <Sparkles size={16} /> Slide {activeSlide + 1} of {selectedProject.slides.length} — {selectedProject.slides[activeSlide].subtitle}
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
                    {selectedProject.slides[activeSlide].title}
                  </h3>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', whiteSpace: 'pre-line', lineHeight: 1.6 }}>
                    {selectedProject.slides[activeSlide].content}
                  </div>
                </div>
              </div>
            )}

            {/* Highlights */}
            {selectedProject.highlights && (
              <div>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                  Key Highlights
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--accent-cyan)' }}>•</span> {h}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem' }}>
              {selectedProject.pdfUrl ? (
                <>
                  <a
                    href={selectedProject.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                    style={{ gap: '0.5rem' }}
                  >
                    <Eye size={16} /> View PDF Document
                  </a>
                  <a
                    href={selectedProject.pdfUrl}
                    download="Meta-Ads-Policy-2026.pdf"
                    className="btn btn-secondary"
                    style={{ gap: '0.5rem' }}
                  >
                    <Download size={16} /> Download PDF
                  </a>
                </>
              ) : selectedProject.liveUrl ? (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ gap: '0.5rem' }}
                >
                  <FileText size={16} /> Open Presentation / Link
                </a>
              ) : null}
              <button onClick={closeProject} className="btn btn-secondary">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

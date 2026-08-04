import React, { useState } from 'react';
import { ExternalLink, Github, Layers, X, Check, Award, ArrowUpRight } from 'lucide-react';
import { projectCategories, projectsData } from '../data/portfolioData';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Explore recent web platforms, AI agents, and spec-driven developer tools.
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.6rem',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: '0.5rem 1.3rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid',
                borderColor: activeFilter === cat ? 'var(--accent-cyan)' : 'var(--border-color)',
                background: activeFilter === cat ? 'rgba(34, 211, 238, 0.15)' : 'var(--bg-card)',
                color: activeFilter === cat ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2rem'
        }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Preview Container */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '200px',
                overflow: 'hidden',
                background: 'var(--bg-secondary)'
              }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                />
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(9, 13, 22, 0.85)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.3rem 0.8rem',
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
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: 'var(--text-primary)' }}>
                  {project.title}
                </h3>

                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.2rem',
                  flex: 1,
                  lineHeight: 1.6
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
                  marginBottom: '1.2rem',
                  fontWeight: 600
                }}>
                  <Award size={15} /> {project.metrics}
                </div>

                {/* Tech Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.2rem' }}>
                  {project.tags.slice(0, 4).map((tag) => (
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
                  {project.tags.length > 4 && (
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Row */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-color)'
                }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-cyan)' }}>
                    View Architecture & Details
                  </span>
                  <ArrowUpRight size={18} color="var(--accent-cyan)" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999,
              background: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem'
            }}
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="glass-card"
              style={{
                maxWidth: '700px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '2rem',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute',
                  top: '1.2rem',
                  right: '1.2rem',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
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
                <X size={18} />
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{
                  width: '100%',
                  height: '240px',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1.5rem'
                }}
              />

              <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                {selectedProject.title}
              </h2>

              <p style={{ color: 'var(--accent-emerald)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1rem' }}>
                Impact: {selectedProject.metrics}
              </p>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {selectedProject.description}
              </p>

              <h4 style={{ fontSize: '1rem', marginBottom: '0.8rem', color: 'var(--text-primary)' }}>
                Architectural Highlights
              </h4>
              <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} style={{ marginBottom: '0.4rem', fontSize: '0.9rem' }}>{h}</li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                {selectedProject.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: '0.3rem 0.8rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(34, 211, 238, 0.1)',
                      color: 'var(--accent-cyan)',
                      fontSize: '0.8rem',
                      fontWeight: 600
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href={selectedProject.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                  Live Demo <ExternalLink size={16} />
                </a>
                <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
                  Source Code <Github size={16} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

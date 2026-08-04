import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles } from 'lucide-react';
import { cliCommands, personalInfo } from '../data/portfolioData';

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', content: 'Welcome to Tanishka\'s Interactive Portfolio CLI v1.0.0' },
    { type: 'system', content: 'Type "help" to view available commands.' }
  ]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState([]);
  
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory = [...history, { type: 'user', content: `tanishka@portfolio:~$ ${cmdStr}` }];
    setCommandHistory(prev => [...prev, cmdStr]);

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (cliCommands[trimmed]) {
      newHistory.push({ type: 'output', content: cliCommands[trimmed] });
    } else {
      newHistory.push({
        type: 'error',
        content: `command not found: "${trimmed}". Type "help" for a list of available commands.`
      });
    }

    setHistory(newHistory);
    setInput('');
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex + 1;
        if (nextIndex < commandHistory.length) {
          setHistoryIndex(nextIndex);
          setInput(commandHistory[commandHistory.length - 1 - nextIndex]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInput(commandHistory[commandHistory.length - 1 - nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  const shortcutBtns = ['help', 'about', 'skills', 'projects', 'contact', 'speclist'];

  return (
    <section id="terminal" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag"><TerminalIcon size={14} /> Interactive CLI</span>
          <h2 className="section-title">Developer Terminal</h2>
          <p className="section-subtitle">
            Explore portfolio details, skills, and Spec Kit status via an interactive terminal session.
          </p>
        </div>

        {/* Quick Command Shortcuts */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap',
          marginBottom: '1.5rem'
        }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', alignSelf: 'center' }}>
            Quick Commands:
          </span>
          {shortcutBtns.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="font-mono"
              style={{
                padding: '0.35rem 0.8rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-card)',
                color: 'var(--accent-cyan)',
                fontSize: '0.8rem',
                cursor: 'pointer'
              }}
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Window Container */}
        <div className="glass-card font-mono" style={{
          maxWidth: '850px',
          margin: '0 auto',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-lg)'
        }}>
          {/* Top Bar */}
          <div style={{
            background: 'rgba(9, 13, 22, 0.95)',
            padding: '0.75rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--border-color)'
          }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
            </div>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              tanishka@portfolio-cli:~
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)' }}>
              ● ACTIVE
            </span>
          </div>

          {/* Terminal Screen Body */}
          <div
            onClick={() => inputRef.current?.focus()}
            style={{
              padding: '1.5rem',
              minHeight: '340px',
              maxHeight: '480px',
              overflowY: 'auto',
              fontSize: '0.88rem',
              lineHeight: 1.6,
              background: 'rgba(5, 8, 15, 0.95)'
            }}
          >
            {history.map((item, index) => (
              <div key={index} style={{ marginBottom: '0.6rem', whiteSpace: 'pre-wrap' }}>
                {item.type === 'user' && (
                  <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>{item.content}</span>
                )}
                {item.type === 'system' && (
                  <span style={{ color: 'var(--accent-indigo)' }}>{item.content}</span>
                )}
                {item.type === 'output' && (
                  <span style={{ color: 'var(--text-primary)' }}>{item.content}</span>
                )}
                {item.type === 'error' && (
                  <span style={{ color: '#f87171' }}>{item.content}</span>
                )}
              </div>
            ))}

            {/* Prompt Input Row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
              <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>
                tanishka@portfolio:~$
              </span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type 'help'..."
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: 'var(--text-primary)',
                  fontFamily: 'inherit',
                  fontSize: 'inherit'
                }}
              />
              <CornerDownLeft size={14} color="var(--text-muted)" />
            </div>
            <div ref={bottomRef} />
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toasts, removeToast }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      maxWidth: '380px',
      width: '100%',
      pointerEvents: 'none'
    }}>
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="glass-card"
          style={{
            pointerEvents: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.85rem 1.25rem',
            borderColor: toast.type === 'success' ? 'var(--accent-emerald)' : 'var(--accent-cyan)',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          {toast.type === 'success' ? (
            <CheckCircle size={20} color="var(--accent-emerald)" />
          ) : (
            <Info size={20} color="var(--accent-cyan)" />
          )}
          <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', flex: 1 }}>
            {toast.message}
          </span>
          <button
            onClick={() => removeToast(toast.id)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  );
}

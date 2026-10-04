import React, { useState } from 'react';
import { X, UserCheck, Lock, AlertCircle, Sparkles, KeyRound } from 'lucide-react';
import { INITIAL_STUDENTS } from '../data/mockData';

export default function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [scholarId, setScholarId] = useState('');
  const [dob, setDob] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    const cleanId = scholarId.trim();
    const cleanDob = dob.trim();

    // Match against mock database
    const foundStudent = INITIAL_STUDENTS.find(
      s => s.scholarId.toLowerCase() === cleanId.toLowerCase() && s.dob === cleanDob
    );

    if (foundStudent) {
      onLoginSuccess(foundStudent);
      onClose();
    } else {
      // Flexible matching for demo if format slightly varies
      const foundByIdOnly = INITIAL_STUDENTS.find(
        s => s.scholarId.toLowerCase() === cleanId.toLowerCase()
      );
      if (foundByIdOnly) {
        // Accept matching student
        onLoginSuccess(foundByIdOnly);
        onClose();
      } else {
        setError('Invalid Scholar ID or Date of Birth. Please check demo accounts below.');
      }
    }
  };

  const handleQuickLogin = (student) => {
    setScholarId(student.scholarId);
    setDob(student.dob);
    onLoginSuccess(student);
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 34, 68, 0.75)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    }}>
      <div 
        className="animate-fade-in"
        style={{
          background: '#ffffff',
          borderRadius: '20px',
          maxWidth: '480px',
          width: '100%',
          boxShadow: '0 20px 40px rgba(0, 51, 102, 0.3)',
          overflow: 'hidden',
          border: '1px solid #bae6fd'
        }}
      >
        {/* Modal Header */}
        <div style={{
          background: 'linear-gradient(135deg, #003366 0%, #002244 100%)',
          color: '#ffffff',
          padding: '24px 28px',
          position: 'relative'
        }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              right: '20px',
              top: '20px',
              background: 'rgba(255, 255, 255, 0.15)',
              border: 'none',
              color: '#ffffff',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <img src="/dsvv_logo.png" alt="DSVV" style={{ height: '36px', background: '#fff', padding: '2px', borderRadius: '6px' }} />
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', margin: 0, color: '#ffffff' }}>
                Student Portal Login
              </h3>
              <p style={{ fontSize: '0.8rem', color: '#38bdf8', margin: 0 }}>
                Dev Sanskriti Vishwavidyalaya Central Library
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '28px' }}>
          <form onSubmit={handleLogin}>
            {error && (
              <div style={{
                background: '#fef2f2',
                border: '1px solid #fecaca',
                color: '#991b1b',
                padding: '10px 14px',
                borderRadius: '8px',
                fontSize: '0.85rem',
                marginBottom: '18px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}

            <div style={{ marginBottom: '18px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#003366', marginBottom: '6px' }}>
                Scholar ID (Enrollment No)
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="e.g. 2424068"
                  value={scholarId}
                  onChange={(e) => setScholarId(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '11px 14px 11px 40px',
                    borderRadius: '10px',
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    outline: 'none',
                    transition: 'border 0.2s'
                  }}
                />
                <UserCheck size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: '#64748b' }} />
              </div>
            </div>

            <div style={{ marginBottom: '22px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#003366', marginBottom: '6px' }}>
                Password (Date of Birth: DD/MM/YYYY)
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="password"
                  placeholder="e.g. 01/08/2006"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '11px 14px 11px 40px',
                    borderRadius: '10px',
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
                <Lock size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: '#64748b' }} />
              </div>
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '10px',
                border: 'none',
                background: 'linear-gradient(135deg, #003366 0%, #0066cc 100%)',
                color: '#ffffff',
                fontWeight: '700',
                fontSize: '1rem',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(0, 51, 102, 0.3)',
                transition: 'all 0.2s'
              }}
            >
              Log In to Pre-Book Books
            </button>
          </form>

          {/* Quick Demo Test Logins */}
          <div style={{
            marginTop: '24px',
            paddingTop: '20px',
            borderTop: '1px dashed #e2e8f0'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '12px'
            }}>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                ⚡ Quick Demo Student Logins
              </span>
              <span style={{ fontSize: '0.75rem', color: '#f59e0b', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Sparkles size={12} /> Test Accounts
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {INITIAL_STUDENTS.map((student) => (
                <button
                  key={student.scholarId}
                  onClick={() => handleQuickLogin(student)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    border: '1px solid #e2e8f0',
                    background: '#f8fafc',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#f0f7ff';
                    e.currentTarget.style.borderColor = '#0066cc';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#f8fafc';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img
                      src={student.avatar}
                      alt={student.name}
                      style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '0.88rem', color: '#003366' }}>
                        {student.name} <span style={{ fontWeight: '500', color: '#64748b', fontSize: '0.78rem' }}>({student.course})</span>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                        Scholar ID: <strong style={{ color: '#0066cc' }}>{student.scholarId}</strong> | DOB: {student.dob}
                      </div>
                    </div>
                  </div>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    color: '#0066cc',
                    background: '#ffffff',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    border: '1px solid #cbd5e1'
                  }}>
                    Login →
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

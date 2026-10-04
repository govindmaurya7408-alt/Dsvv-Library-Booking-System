import React from 'react';
import { BookOpen, Monitor, ShieldCheck, User, LogOut, Sparkles } from 'lucide-react';

export default function Header({ 
  currentView, 
  setCurrentView, 
  currentUser, 
  onOpenLogin, 
  onLogout,
  activeBookingsCount
}) {
  return (
    <header style={{
      background: 'linear-gradient(135deg, #003366 0%, #002244 100%)',
      color: '#ffffff',
      boxShadow: '0 4px 20px rgba(0, 51, 102, 0.3)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      {/* Top University Banner */}
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        padding: '4px 20px',
        fontSize: '0.8rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '500' }}>
          <span style={{ color: '#f59e0b' }}>🕉️</span>
          <span>सा प्रथमा संस्कृतिर्विश्ववारा — Dev Sanskriti Vishwavidyalaya, Haridwar</span>
        </div>
        <div style={{ display: 'flex', gap: '16px', color: '#94a3b8' }}>
          <span>Central Library Services</span>
          <span>|</span>
          <span style={{ color: '#38bdf8' }}>Online Pre-Booking Enabled</span>
        </div>
      </div>

      {/* Main Header Row */}
      <div style={{
        maxWidth: '1300px',
        margin: '0 auto',
        padding: '12px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        {/* Brand & Logo */}
        <div 
          onClick={() => setCurrentView('student')}
          style={{ display: 'flex', alignItems: 'center', gap: '14px', cursor: 'pointer' }}
        >
          <div style={{
            background: '#ffffff',
            padding: '4px 8px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
          }}>
            <img 
              src="/dsvv_logo.png" 
              alt="DSVV Logo" 
              style={{ height: '46px', objectFit: 'contain' }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          <div>
            <h1 style={{ 
              fontSize: '1.35rem', 
              fontWeight: '800', 
              letterSpacing: '-0.02em',
              margin: 0,
              lineHeight: 1.1,
              color: '#ffffff'
            }}>
              देव संस्कृति विश्वविद्यालय
            </h1>
            <div style={{ 
              fontSize: '0.85rem', 
              color: '#38bdf8', 
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <span>DSVV Digital Library & Pre-Booking Portal</span>
            </div>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div style={{
          display: 'flex',
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '4px',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.15)'
        }}>
          <button
            onClick={() => setCurrentView('student')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.85rem',
              transition: 'all 0.2s',
              background: currentView === 'student' ? '#ffffff' : 'transparent',
              color: currentView === 'student' ? '#003366' : '#e2e8f0',
              boxShadow: currentView === 'student' ? '0 2px 6px rgba(0,0,0,0.15)' : 'none'
            }}
          >
            <BookOpen size={16} />
            <span>Room Pre-Booking</span>
            {activeBookingsCount > 0 && (
              <span style={{
                background: '#f59e0b',
                color: '#000000',
                borderRadius: '99px',
                padding: '2px 7px',
                fontSize: '0.7rem',
                fontWeight: '800'
              }}>
                {activeBookingsCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setCurrentView('kiosk')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.85rem',
              transition: 'all 0.2s',
              background: currentView === 'kiosk' ? '#f59e0b' : 'transparent',
              color: currentView === 'kiosk' ? '#000000' : '#e2e8f0',
              boxShadow: currentView === 'kiosk' ? '0 2px 6px rgba(0,0,0,0.2)' : 'none'
            }}
          >
            <Monitor size={16} />
            <span>Library Kiosk Mode</span>
          </button>

          <button
            onClick={() => setCurrentView('librarian')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.85rem',
              transition: 'all 0.2s',
              background: currentView === 'librarian' ? '#ffffff' : 'transparent',
              color: currentView === 'librarian' ? '#003366' : '#e2e8f0',
              boxShadow: currentView === 'librarian' ? '0 2px 6px rgba(0,0,0,0.15)' : 'none'
            }}
          >
            <ShieldCheck size={16} />
            <span>Librarian View</span>
          </button>
        </div>

        {/* User Auth Info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {currentUser ? (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '6px 12px',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <img 
                src={currentUser.avatar} 
                alt={currentUser.name} 
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid #f59e0b'
                }}
              />
              <div style={{ textAlign: 'left', lineHeight: 1.2 }}>
                <div style={{ fontWeight: '700', fontSize: '0.85rem' }}>{currentUser.name}</div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                  ID: <span style={{ color: '#f59e0b', fontWeight: '700' }}>{currentUser.scholarId}</span> ({currentUser.course})
                </div>
              </div>
              <button
                onClick={onLogout}
                title="Logout"
                style={{
                  background: 'rgba(239, 68, 68, 0.2)',
                  border: '1px solid rgba(239, 68, 68, 0.4)',
                  color: '#fca5a5',
                  padding: '6px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: '4px'
                }}
              >
                <LogOut size={16} />
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenLogin}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 18px',
                borderRadius: '8px',
                border: 'none',
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                color: '#000000',
                fontWeight: '700',
                fontSize: '0.88rem',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)',
                transition: 'all 0.2s'
              }}
            >
              <User size={16} />
              <span>Student Login</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

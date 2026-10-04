import React, { useState } from 'react';
import { Search, Filter, BookOpen, MapPin, CheckCircle2, Clock, Bookmark, Sparkles, ChevronRight, AlertCircle, Trash2 } from 'lucide-react';

export default function StudentPortal({ 
  books, 
  currentUser, 
  preBookings, 
  onPreBookBook, 
  onCancelBooking,
  onOpenLogin,
  onSwitchToKiosk
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('ALL');
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  // Filter books
  const filteredBooks = books.filter(book => {
    const matchesSearch = 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.shelfNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.compartmentNo.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDept = selectedDept === 'ALL' || book.department === selectedDept;
    const matchesAvailability = !onlyAvailable || book.availableCopies > 0;

    return matchesSearch && matchesDept && matchesAvailability;
  });

  const myBookings = currentUser 
    ? preBookings.filter(b => b.scholarId === currentUser.scholarId)
    : [];

  const departments = [
    'ALL',
    'Computer Science & IT',
    'Yogic Science & Holistic Health',
    'Indian Culture & Vedic Studies',
    'Environmental Science'
  ];

  return (
    <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '24px 20px' }}>
      
      {/* Hero Welcome Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #003366 0%, #002244 100%)',
        color: '#ffffff',
        borderRadius: '20px',
        padding: '28px 32px',
        boxShadow: '0 10px 30px rgba(0, 51, 102, 0.25)',
        marginBottom: '28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px',
        border: '1px solid #0066cc'
      }}>
        <div style={{ maxWidth: '650px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(245, 158, 11, 0.2)',
            border: '1px solid rgba(245, 158, 11, 0.4)',
            color: '#f59e0b',
            padding: '4px 12px',
            borderRadius: '99px',
            fontSize: '0.8rem',
            fontWeight: '700',
            marginBottom: '12px'
          }}>
            <Sparkles size={14} />
            <span>Remote Pre-Booking from Dorm Room</span>
          </div>

          <h2 style={{ fontSize: '1.75rem', fontWeight: '800', lineHeight: 1.2, margin: '0 0 8px 0' }}>
            Pre-Book Library Books Remotely & Pick Up at Kiosk
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', margin: 0, lineHeight: 1.5 }}>
            Reserve books directly from your phone or room. Every book displays exact live integrated 
            <strong> Shelf & Compartment numbers</strong>. Collect your slip at the library kiosk in seconds!
          </p>
        </div>

        {/* Quick Kiosk Callout Card */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '16px',
          padding: '18px 22px',
          textAlign: 'left',
          maxWidth: '320px'
        }}>
          <div style={{ fontSize: '0.78rem', color: '#38bdf8', fontWeight: '700', textTransform: 'uppercase' }}>
            Library Kiosk Integration
          </div>
          <div style={{ fontSize: '1rem', fontWeight: '800', color: '#ffffff', margin: '4px 0 8px 0' }}>
            Going to the Library?
          </div>
          <p style={{ fontSize: '0.8rem', color: '#cbd5e1', margin: '0 0 12px 0' }}>
            Just enter your Scholar ID at the campus kiosk to print your official issue slip!
          </p>
          <button
            onClick={onSwitchToKiosk}
            style={{
              width: '100%',
              padding: '8px 14px',
              borderRadius: '8px',
              border: 'none',
              background: '#f59e0b',
              color: '#000000',
              fontWeight: '700',
              fontSize: '0.85rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            <span>Open Kiosk Simulator</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Main Grid: My Active Bookings + Book Catalog */}
      <div style={{ display: 'grid', gridTemplateColumns: myBookings.length > 0 ? '1fr 340px' : '1fr', gap: '28px' }}>
        
        {/* Left Column: Search & Book Catalog */}
        <div>
          {/* Search & Filter Bar */}
          <div style={{
            background: '#ffffff',
            padding: '20px',
            borderRadius: '16px',
            boxShadow: 'var(--shadow-sm)',
            border: '1px solid var(--dsvv-border)',
            marginBottom: '24px'
          }}>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <div style={{ position: 'relative', flex: 1, minWidth: '240px' }}>
                <input
                  type="text"
                  placeholder="Search by Title, Author, Subject, Shelf S-XX..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px 12px 42px',
                    borderRadius: '10px',
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
                <Search size={18} style={{ position: 'absolute', left: '14px', top: '14px', color: '#64748b' }} />
              </div>

              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: '#f8fafc',
                padding: '10px 16px',
                borderRadius: '10px',
                border: '1px solid #e2e8f0',
                cursor: 'pointer',
                fontSize: '0.88rem',
                fontWeight: '600',
                color: '#003366'
              }}>
                <input
                  type="checkbox"
                  checked={onlyAvailable}
                  onChange={(e) => setOnlyAvailable(e.target.checked)}
                />
                <span>Available Now Only</span>
              </label>
            </div>

            {/* Department Filter Chips */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {departments.map(dept => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '99px',
                    border: '1px solid',
                    borderColor: selectedDept === dept ? '#003366' : '#cbd5e1',
                    background: selectedDept === dept ? '#003366' : '#ffffff',
                    color: selectedDept === dept ? '#ffffff' : '#64748b',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {dept === 'ALL' ? 'All Departments' : dept}
                </button>
              ))}
            </div>
          </div>

          {/* Book Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '20px'
          }}>
            {filteredBooks.map(book => {
              const isPreBookedByMe = currentUser && preBookings.some(
                b => b.scholarId === currentUser.scholarId && b.bookId === book.id && b.status === 'PRE_BOOKED'
              );

              return (
                <div 
                  key={book.id}
                  className="glass-card"
                  style={{
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justify: 'space-between',
                    borderRadius: '16px'
                  }}
                >
                  <div>
                    {/* Header Badge Row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                      <span style={{
                        background: '#f0f7ff',
                        color: '#0066cc',
                        border: '1px solid #bae6fd',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontSize: '0.72rem',
                        fontWeight: '700'
                      }}>
                        {book.department}
                      </span>

                      {book.availableCopies > 0 ? (
                        <span className="badge badge-available">
                          🟢 {book.availableCopies} Copies Available
                        </span>
                      ) : (
                        <span className="badge" style={{ background: '#fef2f2', color: '#991b1b', border: '1px solid #fecaca' }}>
                          🔴 All Issued
                        </span>
                      )}
                    </div>

                    <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#003366', marginBottom: '4px', lineHeight: 1.3 }}>
                      {book.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '14px' }}>
                      By {book.author}
                    </p>

                    {/* Integrated Shelf Location Box */}
                    <div style={{
                      background: 'linear-gradient(135deg, #f0f7ff 0%, #e0f2fe 100%)',
                      border: '1.5px solid #0284c7',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      marginBottom: '16px'
                    }}>
                      <div style={{ fontSize: '0.72rem', color: '#0369a1', fontWeight: '800', textTransform: 'uppercase', marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <MapPin size={12} />
                        Integrated Shelf Locator Data
                      </div>
                      <div style={{ fontSize: '0.98rem', fontWeight: '800', color: '#003366' }}>
                        {book.shelfNo} <span style={{ color: '#0066cc' }}>| {book.compartmentNo}</span>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                        {book.floorSection}
                      </div>
                    </div>
                  </div>

                  {/* Pre-Booking Action Button */}
                  <div style={{ paddingTop: '12px', borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.75rem', color: '#64748b', fontFamily: 'monospace' }}>
                      {book.accessionNo}
                    </span>

                    {isPreBookedByMe ? (
                      <span style={{
                        background: '#fffbeeb',
                        color: '#b45309',
                        padding: '8px 14px',
                        borderRadius: '8px',
                        fontSize: '0.82rem',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}>
                        <CheckCircle2 size={16} /> Pre-Booked
                      </span>
                    ) : (
                      <button
                        onClick={() => {
                          if (!currentUser) {
                            onOpenLogin();
                          } else {
                            onPreBookBook(book);
                          }
                        }}
                        disabled={book.availableCopies === 0}
                        style={{
                          padding: '9px 16px',
                          borderRadius: '8px',
                          border: 'none',
                          background: book.availableCopies > 0 
                            ? 'linear-gradient(135deg, #003366 0%, #0066cc 100%)' 
                            : '#cbd5e1',
                          color: '#ffffff',
                          fontWeight: '700',
                          fontSize: '0.85rem',
                          cursor: book.availableCopies > 0 ? 'pointer' : 'not-allowed',
                          boxShadow: book.availableCopies > 0 ? '0 4px 10px rgba(0, 51, 102, 0.2)' : 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <Bookmark size={15} />
                        <span>Pre-Book from Room</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: My Active Room Pre-Bookings */}
        {myBookings.length > 0 && (
          <div>
            <div style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '20px',
              border: '2px solid #0066cc',
              boxShadow: 'var(--shadow-md)',
              position: 'sticky',
              top: '90px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#003366', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Bookmark size={18} style={{ color: '#f59e0b' }} />
                  <span>My Active Pre-Bookings</span>
                </h3>
                <span style={{ background: '#f59e0b', color: '#000', padding: '2px 8px', borderRadius: '99px', fontSize: '0.75rem', fontWeight: '800' }}>
                  {myBookings.length}
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {myBookings.map(b => (
                  <div key={b.bookingId} style={{
                    background: '#f8fafc',
                    borderRadius: '12px',
                    padding: '14px',
                    border: '1px solid #e2e8f0'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                      <span className="badge badge-prebooked">
                        ⏳ Hold Active (24h)
                      </span>
                      <button
                        onClick={() => onCancelBooking(b.bookingId)}
                        title="Cancel Pre-Booking"
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#ef4444',
                          cursor: 'pointer',
                          padding: '2px'
                        }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <div style={{ fontWeight: '800', fontSize: '0.95rem', color: '#003366', marginBottom: '2px' }}>
                      {b.bookTitle}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b', marginBottom: '10px' }}>
                      By {b.author}
                    </div>

                    {/* Shelf info */}
                    <div style={{
                      background: '#ffffff',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      border: '1px solid #bae6fd',
                      fontSize: '0.82rem',
                      color: '#003366',
                      fontWeight: '700',
                      marginBottom: '10px'
                    }}>
                      📍 Location: {b.shelfNo} | {b.compartmentNo}
                    </div>

                    {/* Kiosk instructions */}
                    <div style={{
                      background: '#ecfdf5',
                      border: '1px solid #a7f3d0',
                      borderRadius: '8px',
                      padding: '8px 10px',
                      fontSize: '0.75rem',
                      color: '#047857'
                    }}>
                      💡 <strong>Next Step:</strong> Go to Library Kiosk & type Scholar ID: <strong>{b.scholarId}</strong> to print slip!
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

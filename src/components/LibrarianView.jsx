import React, { useState } from 'react';
import { ShieldCheck, BookOpen, Clock, CheckCircle2, MapPin, Search, Edit3, Plus, RotateCcw } from 'lucide-react';

export default function LibrarianView({ 
  books, 
  preBookings, 
  students, 
  onResetDemoData 
}) {
  const [activeTab, setActiveTab] = useState('bookings'); // 'bookings' | 'inventory'
  const [searchFilter, setSearchFilter] = useState('');

  const filteredBookings = preBookings.filter(b => 
    b.studentName.toLowerCase().includes(searchFilter.toLowerCase()) ||
    b.scholarId.toLowerCase().includes(searchFilter.toLowerCase()) ||
    b.bookTitle.toLowerCase().includes(searchFilter.toLowerCase()) ||
    b.shelfNo.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div style={{ maxWidth: '1250px', margin: '0 auto', padding: '24px 20px' }}>
      
      {/* Header Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #003366 0%, #002244 100%)',
        color: '#ffffff',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        boxShadow: '0 8px 24px rgba(0, 51, 102, 0.2)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            background: '#ffffff',
            color: '#003366',
            padding: '10px',
            borderRadius: '12px'
          }}>
            <ShieldCheck size={28} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: '800', margin: 0 }}>
              DSVV Library Administration Console
            </h2>
            <p style={{ fontSize: '0.85rem', color: '#38bdf8', margin: '2px 0 0 0' }}>
              Central Monitoring & Physical Inventory Management
            </p>
          </div>
        </div>

        <button
          onClick={onResetDemoData}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '9px 16px',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            background: 'rgba(255, 255, 255, 0.1)',
            color: '#ffffff',
            fontWeight: '600',
            fontSize: '0.85rem',
            cursor: 'pointer'
          }}
        >
          <RotateCcw size={16} />
          <span>Reset Demo Data</span>
        </button>
      </div>

      {/* Metrics Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '16px',
        marginBottom: '24px'
      }}>
        <div className="glass-card" style={{ padding: '18px' }}>
          <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: '700' }}>Total Books in Catalog</div>
          <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#003366' }}>{books.length}</div>
        </div>

        <div className="glass-card" style={{ padding: '18px', borderLeft: '4px solid #f59e0b' }}>
          <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: '700' }}>Active Room Pre-Bookings</div>
          <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#b45309' }}>
            {preBookings.filter(b => b.status === 'PRE_BOOKED').length}
          </div>
        </div>

        <div className="glass-card" style={{ padding: '18px', borderLeft: '4px solid #10b981' }}>
          <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: '700' }}>Issued Slips Dispensed</div>
          <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#047857' }}>
            {preBookings.filter(b => b.status === 'ISSUED').length}
          </div>
        </div>
      </div>

      {/* Main Table Content */}
      <div style={{
        background: '#ffffff',
        borderRadius: '16px',
        border: '1px solid #e2e8f0',
        boxShadow: 'var(--shadow-sm)',
        padding: '20px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => setActiveTab('bookings')}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                border: 'none',
                background: activeTab === 'bookings' ? '#003366' : '#f1f5f9',
                color: activeTab === 'bookings' ? '#ffffff' : '#64748b',
                fontWeight: '700',
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              Pre-Bookings & Issued Slips Log
            </button>
            <button
              onClick={() => setActiveTab('inventory')}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                border: 'none',
                background: activeTab === 'inventory' ? '#003366' : '#f1f5f9',
                color: activeTab === 'inventory' ? '#ffffff' : '#64748b',
                fontWeight: '700',
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              Integrated Shelf Location Records
            </button>
          </div>

          <div style={{ position: 'relative', width: '280px' }}>
            <input
              type="text"
              placeholder="Search record..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px 8px 34px',
                borderRadius: '8px',
                border: '1px solid #cbd5e1',
                fontSize: '0.85rem'
              }}
            />
            <Search size={16} style={{ position: 'absolute', left: '10px', top: '10px', color: '#94a3b8' }} />
          </div>
        </div>

        {/* Tab 1: Pre-Bookings */}
        {activeTab === 'bookings' && (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0', color: '#003366' }}>
                  <th style={{ padding: '12px' }}>Booking ID</th>
                  <th style={{ padding: '12px' }}>Scholar Name & ID</th>
                  <th style={{ padding: '12px' }}>Book Title</th>
                  <th style={{ padding: '12px' }}>Integrated Shelf No</th>
                  <th style={{ padding: '12px' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map(b => (
                  <tr key={b.bookingId} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '12px', fontFamily: 'monospace', fontWeight: '700', color: '#0066cc' }}>{b.bookingId}</td>
                    <td style={{ padding: '12px' }}>
                      <div style={{ fontWeight: '700', color: '#003366' }}>{b.studentName}</div>
                      <div style={{ fontSize: '0.78rem', color: '#64748b' }}>ID: {b.scholarId} ({b.course})</div>
                    </td>
                    <td style={{ padding: '12px', fontWeight: '600' }}>{b.bookTitle}</td>
                    <td style={{ padding: '12px' }}>
                      <span className="badge badge-shelf">
                        📍 {b.shelfNo} | {b.compartmentNo}
                      </span>
                    </td>
                    <td style={{ padding: '12px' }}>
                      {b.status === 'PRE_BOOKED' && (
                        <span className="badge badge-prebooked">⏳ Room Pre-Booked</span>
                      )}
                      {b.status === 'ISSUED' && (
                        <span className="badge badge-issued">✓ Issued at Kiosk</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 2: Inventory */}
        {activeTab === 'inventory' && (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0', color: '#003366' }}>
                  <th style={{ padding: '12px' }}>Accession No</th>
                  <th style={{ padding: '12px' }}>Book Title & Author</th>
                  <th style={{ padding: '12px' }}>Department</th>
                  <th style={{ padding: '12px' }}>Integrated Shelf & Compartment</th>
                  <th style={{ padding: '12px' }}>Availability</th>
                </tr>
              </thead>
              <tbody>
                {books.map(bk => (
                  <tr key={bk.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '12px', fontFamily: 'monospace', fontWeight: '700', color: '#003366' }}>{bk.accessionNo}</td>
                    <td style={{ padding: '12px' }}>
                      <div style={{ fontWeight: '700', color: '#0f172a' }}>{bk.title}</div>
                      <div style={{ fontSize: '0.78rem', color: '#64748b' }}>By {bk.author}</div>
                    </td>
                    <td style={{ padding: '12px', fontSize: '0.82rem', color: '#0284c7', fontWeight: '600' }}>{bk.department}</td>
                    <td style={{ padding: '12px' }}>
                      <span className="badge badge-shelf">
                        📍 {bk.shelfNo} | {bk.compartmentNo}
                      </span>
                    </td>
                    <td style={{ padding: '12px', fontWeight: '700', color: bk.availableCopies > 0 ? '#047857' : '#991b1b' }}>
                      {bk.availableCopies} / {bk.totalCopies} Available
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

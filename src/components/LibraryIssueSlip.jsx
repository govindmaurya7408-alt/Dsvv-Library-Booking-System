import React from 'react';
import { Printer, CheckCircle, MapPin, Calendar, Clock, BookOpen, QrCode, Shield } from 'lucide-react';

export default function LibraryIssueSlip({ booking, onClose }) {
  if (!booking) return null;

  const handlePrint = () => {
    window.print();
  };

  // Format dates
  const issueDate = new Date().toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  const dueTimestamp = new Date();
  dueTimestamp.setDate(dueTimestamp.getDate() + 14);
  const dueDate = dueTimestamp.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 34, 68, 0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000,
      padding: '20px',
      overflowY: 'auto'
    }}>
      <div style={{ maxWidth: '650px', width: '100%', margin: 'auto' }}>
        {/* Action Controls for Screen view */}
        <div className="no-print" style={{
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          marginBottom: '14px',
          background: '#ffffff',
          padding: '12px 20px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981', fontWeight: '700' }}>
            <CheckCircle size={20} />
            <span>Slip Generated & Verified! Ready for Print</span>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={handlePrint}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 18px',
                borderRadius: '8px',
                border: 'none',
                background: 'linear-gradient(135deg, #003366 0%, #0066cc 100%)',
                color: '#ffffff',
                fontWeight: '700',
                cursor: 'pointer',
                boxShadow: '0 4px 10px rgba(0, 51, 102, 0.3)'
              }}
            >
              <Printer size={18} />
              <span>Print Library Slip</span>
            </button>
            <button
              onClick={onClose}
              style={{
                padding: '9px 16px',
                borderRadius: '8px',
                border: '1px solid #cbd5e1',
                background: '#ffffff',
                color: '#64748b',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Close
            </button>
          </div>
        </div>

        {/* Printable Official Slip Card */}
        <div 
          className="printable-slip animate-fade-in"
          style={{
            background: '#ffffff',
            borderRadius: '16px',
            border: '2px solid #003366',
            boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
            padding: '30px',
            color: '#0f172a',
            fontFamily: 'Inter, sans-serif'
          }}
        >
          {/* Slip Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '2px double #003366',
            paddingBottom: '16px',
            marginBottom: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <img 
                src="/dsvv_logo.png" 
                alt="DSVV Emblem" 
                style={{ height: '65px', objectFit: 'contain' }}
              />
              <div>
                <h2 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#003366', margin: 0 }}>
                  देव संस्कृति विश्वविद्यालय
                </h2>
                <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#0066cc' }}>
                  DEV SANSKRITI VISHWAVIDYALAYA CENTRAL LIBRARY
                </div>
                <div style={{ fontSize: '0.72rem', color: '#64748b' }}>
                  Gayatrikunj, Shantikunj, Haridwar, Uttarakhand - 249411
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ 
                background: '#003366', 
                color: '#ffffff', 
                padding: '4px 12px', 
                borderRadius: '6px', 
                fontSize: '0.75rem', 
                fontWeight: '800',
                display: 'inline-block'
              }}>
                OFFICIAL ISSUE SLIP
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '6px', fontWeight: '600' }}>
                Ref No: <span style={{ fontFamily: 'monospace', color: '#003366' }}>{booking.bookingId}</span>
              </div>
            </div>
          </div>

          {/* Location Highlight Box */}
          <div style={{
            background: 'linear-gradient(135deg, #f0f7ff 0%, #e0f2fe 100%)',
            border: '2px solid #0284c7',
            borderRadius: '12px',
            padding: '16px',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                background: '#003366',
                color: '#ffffff',
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <MapPin size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#0369a1', fontWeight: '800' }}>
                  Integrated Physical Location
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#003366' }}>
                  {booking.shelfNo} <span style={{ color: '#0066cc' }}>| {booking.compartmentNo}</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#0369a1', fontWeight: '600' }}>
                  Section: {booking.floorSection}
                </div>
              </div>
            </div>

            <div style={{
              background: '#ffffff',
              padding: '6px 12px',
              borderRadius: '8px',
              border: '1px solid #bae6fd',
              textAlign: 'center'
            }}>
              <span style={{ fontSize: '0.7rem', color: '#64748b', display: 'block' }}>Status</span>
              <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#10b981' }}>✓ ISSUED</span>
            </div>
          </div>

          {/* Student & Book Details Table Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            marginBottom: '20px'
          }}>
            {/* Student Info Box */}
            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '10px',
              padding: '14px'
            }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#003366', textTransform: 'uppercase', marginBottom: '8px', borderBottom: '1px solid #e2e8f0', paddingBottom: '4px' }}>
                Scholar Details
              </div>
              <div style={{ fontSize: '0.88rem', marginBottom: '4px' }}>
                <span style={{ color: '#64748b' }}>Name: </span>
                <strong style={{ color: '#0f172a' }}>{booking.studentName}</strong>
              </div>
              <div style={{ fontSize: '0.88rem', marginBottom: '4px' }}>
                <span style={{ color: '#64748b' }}>Scholar ID: </span>
                <strong style={{ color: '#0066cc', fontFamily: 'monospace' }}>{booking.scholarId}</strong>
              </div>
              <div style={{ fontSize: '0.88rem' }}>
                <span style={{ color: '#64748b' }}>Course: </span>
                <strong>{booking.course}</strong>
              </div>
            </div>

            {/* Book Details Box */}
            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '10px',
              padding: '14px'
            }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#003366', textTransform: 'uppercase', marginBottom: '8px', borderBottom: '1px solid #e2e8f0', paddingBottom: '4px' }}>
                Book Specifications
              </div>
              <div style={{ fontSize: '0.88rem', marginBottom: '4px' }}>
                <span style={{ color: '#64748b' }}>Accession No: </span>
                <strong style={{ color: '#003366', fontFamily: 'monospace' }}>{booking.accessionNo}</strong>
              </div>
              <div style={{ fontSize: '0.88rem', marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                <span style={{ color: '#64748b' }}>Title: </span>
                <strong>{booking.bookTitle}</strong>
              </div>
              <div style={{ fontSize: '0.85rem' }}>
                <span style={{ color: '#64748b' }}>Author: </span>
                <span>{booking.author}</span>
              </div>
            </div>
          </div>

          {/* Dates & Signature Row */}
          <div style={{
            display: 'flex',
            justify: 'space-between',
            alignItems: 'center',
            background: '#ffffff',
            border: '1px dashed #cbd5e1',
            borderRadius: '10px',
            padding: '12px 18px',
            marginBottom: '20px'
          }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Issue Date</div>
              <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#003366' }}>{issueDate}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Return Due Date</div>
              <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#d97706' }}>{dueDate} (14 Days)</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Issued Via</div>
              <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#0284c7' }}>DSVV Library Kiosk #01</div>
            </div>
          </div>

          {/* Barcode & Footer Security Details */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justify: 'space-between',
            borderTop: '1px solid #e2e8f0',
            paddingTop: '14px'
          }}>
            {/* Mock Visual Barcode */}
            <div>
              <div style={{
                height: '34px',
                width: '180px',
                background: 'repeating-linear-gradient(90deg, #000 0px, #000 2px, #fff 2px, #fff 4px, #000 4px, #000 7px, #fff 7px, #fff 9px)',
                borderRadius: '2px'
              }} />
              <div style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: '#64748b', marginTop: '2px', textAlign: 'center' }}>
                *{booking.bookingId}*
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                Generated by DSVV Automated Library System
              </div>
              <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#003366' }}>
                Dev Sanskriti Vishwavidyalaya
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

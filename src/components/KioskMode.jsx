import React, { useState } from 'react';
import { Monitor, CreditCard, Search, CheckCircle2, Printer, MapPin, AlertCircle, RefreshCw, Sparkles, BookOpen } from 'lucide-react';
import LibraryIssueSlip from './LibraryIssueSlip';

export default function KioskMode({ 
  preBookings, 
  books, 
  onIssueBooking, 
  onPreBookBook 
}) {
  const [scholarIdInput, setScholarIdInput] = useState('');
  const [activeSearchResult, setActiveSearchResult] = useState(null);
  const [searched, setSearched] = useState(false);
  const [selectedBookingForSlip, setSelectedBookingForSlip] = useState(null);
  const [simulatingScan, setSimulatingScan] = useState(false);

  // Handle Search in Kiosk
  const handleKioskSearch = (idToSearch) => {
    const targetId = idToSearch || scholarIdInput.trim();
    if (!targetId) return;

    setSearched(true);
    setScholarIdInput(targetId);

    // Find active pre-booking for this scholar ID
    const foundBooking = preBookings.find(
      b => b.scholarId.toLowerCase() === targetId.toLowerCase() && b.status === 'PRE_BOOKED'
    );

    if (foundBooking) {
      setActiveSearchResult({ type: 'PRE_BOOKED', data: foundBooking });
    } else {
      // Check if student has an already issued book or no booking
      const foundIssued = preBookings.find(
        b => b.scholarId.toLowerCase() === targetId.toLowerCase() && b.status === 'ISSUED'
      );
      if (foundIssued) {
        setActiveSearchResult({ type: 'ISSUED', data: foundIssued });
      } else {
        setActiveSearchResult({ type: 'NOT_FOUND', id: targetId });
      }
    }
  };

  const handleSimulateICardScan = (scholarId) => {
    setSimulatingScan(true);
    setTimeout(() => {
      setSimulatingScan(false);
      handleKioskSearch(scholarId);
    }, 600);
  };

  const handlePrintSlipAction = (booking) => {
    onIssueBooking(booking.bookingId);
    setSelectedBookingForSlip({ ...booking, status: 'ISSUED' });
  };

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '24px 20px'
    }}>
      {/* Kiosk Mode Notice Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #003366 0%, #002244 100%)',
        color: '#ffffff',
        padding: '20px 24px',
        borderRadius: '16px',
        boxShadow: '0 8px 24px rgba(0, 51, 102, 0.25)',
        marginBottom: '28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        border: '2px solid #0066cc'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            background: '#f59e0b',
            color: '#000000',
            padding: '12px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Monitor size={32} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: '800', margin: 0 }}>
                Library Campus Kiosk Interface
              </h2>
              <span style={{
                background: '#10b981',
                color: '#ffffff',
                padding: '3px 10px',
                borderRadius: '99px',
                fontSize: '0.72rem',
                fontWeight: '800'
              }}>
                LIVE KIOSK #01
              </span>
            </div>
            <p style={{ fontSize: '0.88rem', color: '#38bdf8', margin: '4px 0 0 0' }}>
              Simulates the physical self-service kiosk located inside DSVV Central Library.
            </p>
          </div>
        </div>

        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '8px 16px',
          borderRadius: '10px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          fontSize: '0.85rem'
        }}>
          <span style={{ color: '#94a3b8' }}>Kiosk Mode: </span>
          <strong style={{ color: '#f59e0b' }}>Scholar ID Slip Printing</strong>
        </div>
      </div>

      {/* Main Kiosk Touch Panel Screen */}
      <div style={{
        background: '#ffffff',
        borderRadius: '24px',
        border: '2px solid #bae6fd',
        boxShadow: '0 12px 35px rgba(0, 51, 102, 0.15)',
        padding: '36px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#f0f7ff', padding: '6px 14px', borderRadius: '99px', color: '#0066cc', fontWeight: '700', fontSize: '0.85rem', marginBottom: '16px' }}>
            <CreditCard size={16} />
            <span>Campus ICARD / Scholar ID Terminal</span>
          </div>

          <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#003366', marginBottom: '8px' }}>
            Pre-Booked Book Pickup & Slip Dispenser
          </h3>
          <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '28px' }}>
            If you pre-booked a book from your room, enter your <strong>Scholar ID</strong> below to instantly print your Issue & Shelf Locator Slip.
          </p>

          {/* Large Kiosk Input Form */}
          <form 
            onSubmit={(e) => { e.preventDefault(); handleKioskSearch(); }}
            style={{ marginBottom: '28px' }}
          >
            <div style={{
              display: 'flex',
              gap: '12px',
              maxWidth: '560px',
              margin: '0 auto'
            }}>
              <div style={{ position: 'relative', flex: 1 }}>
                <input
                  type="text"
                  placeholder="Enter Scholar ID (e.g. 2424068)"
                  value={scholarIdInput}
                  onChange={(e) => setScholarIdInput(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '16px 20px 16px 50px',
                    borderRadius: '14px',
                    border: '2.5px solid #0066cc',
                    fontSize: '1.15rem',
                    fontWeight: '700',
                    color: '#003366',
                    outline: 'none',
                    boxShadow: '0 4px 14px rgba(0, 102, 204, 0.15)'
                  }}
                />
                <Search size={22} style={{ position: 'absolute', left: '16px', top: '18px', color: '#0066cc' }} />
              </div>

              <button
                type="submit"
                disabled={simulatingScan}
                style={{
                  padding: '16px 28px',
                  borderRadius: '14px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #003366 0%, #0066cc 100%)',
                  color: '#ffffff',
                  fontWeight: '800',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(0, 51, 102, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                {simulatingScan ? <RefreshCw className="animate-spin" size={20} /> : <Printer size={20} />}
                <span>Fetch Slip</span>
              </button>
            </div>
          </form>

          {/* Quick Tap ICARD Buttons for Demo Students */}
          <div style={{
            background: '#f8fafc',
            border: '1px dashed #cbd5e1',
            borderRadius: '16px',
            padding: '20px',
            marginBottom: '32px'
          }}>
            <div style={{ fontSize: '0.8rem', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
              <Sparkles size={14} style={{ color: '#f59e0b' }} />
              <span>Tap a Demo ICARD to Simulate Kiosk Insertion</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={() => handleSimulateICardScan('2424068')}
                style={{
                  background: scholarIdInput === '2424068' ? '#003366' : '#ffffff',
                  color: scholarIdInput === '2424068' ? '#ffffff' : '#003366',
                  border: '2px solid #003366',
                  padding: '10px 18px',
                  borderRadius: '12px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
                }}
              >
                <CreditCard size={18} />
                <span>Heera (2424068 - B.Sc IT)</span>
              </button>

              <button
                onClick={() => handleSimulateICardScan('2424100')}
                style={{
                  background: scholarIdInput === '2424100' ? '#003366' : '#ffffff',
                  color: scholarIdInput === '2424100' ? '#ffffff' : '#003366',
                  border: '2px solid #003366',
                  padding: '10px 18px',
                  borderRadius: '12px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
                }}
              >
                <CreditCard size={18} />
                <span>Gyan (2424100 - BCA)</span>
              </button>

              <button
                onClick={() => handleSimulateICardScan('2424301')}
                style={{
                  background: scholarIdInput === '2424301' ? '#003366' : '#ffffff',
                  color: scholarIdInput === '2424301' ? '#ffffff' : '#003366',
                  border: '2px solid #003366',
                  padding: '10px 18px',
                  borderRadius: '12px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
                }}
              >
                <CreditCard size={18} />
                <span>Govind (2424301 - BCA)</span>
              </button>
            </div>
          </div>

          {/* Search Result Display */}
          {searched && activeSearchResult && (
            <div className="animate-fade-in" style={{ textAlign: 'left' }}>
              {activeSearchResult.type === 'PRE_BOOKED' && (
                <div style={{
                  background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
                  border: '2px solid #10b981',
                  borderRadius: '18px',
                  padding: '24px',
                  boxShadow: '0 8px 24px rgba(16, 185, 129, 0.15)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#047857', fontWeight: '800', fontSize: '1.1rem' }}>
                      <CheckCircle2 size={24} />
                      <span>✨ Active Pre-Booking Found!</span>
                    </div>
                    <span style={{ background: '#10b981', color: '#ffffff', padding: '4px 12px', borderRadius: '99px', fontWeight: '800', fontSize: '0.75rem' }}>
                      READY FOR PICKUP
                    </span>
                  </div>

                  <div style={{
                    background: '#ffffff',
                    borderRadius: '14px',
                    padding: '18px',
                    border: '1px solid #a7f3d0',
                    marginBottom: '18px'
                  }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>Student</div>
                        <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#003366' }}>{activeSearchResult.data.studentName}</div>
                        <div style={{ fontSize: '0.82rem', color: '#0066cc', fontWeight: '600' }}>Scholar ID: {activeSearchResult.data.scholarId} ({activeSearchResult.data.course})</div>
                      </div>

                      <div>
                        <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>Pre-Booked Book</div>
                        <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#0f172a' }}>{activeSearchResult.data.bookTitle}</div>
                        <div style={{ fontSize: '0.82rem', color: '#64748b' }}>By {activeSearchResult.data.author}</div>
                      </div>
                    </div>

                    {/* Integrated Shelf & Compartment Highlight */}
                    <div style={{
                      marginTop: '16px',
                      paddingTop: '14px',
                      borderTop: '1px dashed #cbd5e1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: '#f0f7ff',
                      padding: '12px 16px',
                      borderRadius: '10px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <MapPin size={20} style={{ color: '#0066cc' }} />
                        <div>
                          <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block' }}>Integrated Shelf Location:</span>
                          <strong style={{ fontSize: '1.05rem', color: '#003366' }}>
                            {activeSearchResult.data.shelfNo} | {activeSearchResult.data.compartmentNo}
                          </strong>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right', fontSize: '0.8rem', color: '#0284c7', fontWeight: '600' }}>
                        {activeSearchResult.data.floorSection}
                      </div>
                    </div>
                  </div>

                  {/* Print Button */}
                  <button
                    onClick={() => handlePrintSlipAction(activeSearchResult.data)}
                    style={{
                      width: '100%',
                      padding: '16px',
                      borderRadius: '14px',
                      border: 'none',
                      background: 'linear-gradient(135deg, #003366 0%, #0066cc 100%)',
                      color: '#ffffff',
                      fontWeight: '800',
                      fontSize: '1.1rem',
                      cursor: 'pointer',
                      boxShadow: '0 6px 20px rgba(0, 51, 102, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px'
                    }}
                  >
                    <Printer size={22} />
                    <span>PRINT DSVV LIBRARY ISSUE SLIP NOW</span>
                  </button>
                </div>
              )}

              {activeSearchResult.type === 'ISSUED' && (
                <div style={{
                  background: '#f0f9ff',
                  border: '2px solid #0284c7',
                  borderRadius: '18px',
                  padding: '24px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#0369a1', fontWeight: '800', fontSize: '1.1rem', marginBottom: '12px' }}>
                    <CheckCircle2 size={22} />
                    <span>Slip Already Issued for {activeSearchResult.data.studentName}!</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '14px' }}>
                    Book <strong>{activeSearchResult.data.bookTitle}</strong> was already issued and printed.
                  </p>
                  <button
                    onClick={() => setSelectedBookingForSlip(activeSearchResult.data)}
                    style={{
                      padding: '10px 20px',
                      borderRadius: '10px',
                      border: 'none',
                      background: '#0284c7',
                      color: '#ffffff',
                      fontWeight: '700',
                      cursor: 'pointer'
                    }}
                  >
                    Re-Print Slip Copy
                  </button>
                </div>
              )}

              {activeSearchResult.type === 'NOT_FOUND' && (
                <div style={{
                  background: '#fffbeeb',
                  border: '2px solid #f59e0b',
                  borderRadius: '18px',
                  padding: '24px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#b45309', fontWeight: '800', fontSize: '1.1rem', marginBottom: '8px' }}>
                    <AlertCircle size={22} />
                    <span>No Active Pre-Booking Found for ID: {activeSearchResult.id}</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '16px' }}>
                    You haven't pre-booked a book from your room yet. You can search the library catalog below and pre-book right now!
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Modal for Printing Slip */}
      {selectedBookingForSlip && (
        <LibraryIssueSlip 
          booking={selectedBookingForSlip}
          onClose={() => setSelectedBookingForSlip(null)}
        />
      )}
    </div>
  );
}

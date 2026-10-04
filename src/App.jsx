import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LoginModal from './components/LoginModal';
import StudentPortal from './components/StudentPortal';
import KioskMode from './components/KioskMode';
import LibrarianView from './components/LibrarianView';
import { INITIAL_BOOKS, INITIAL_PRE_BOOKINGS, INITIAL_STUDENTS } from './data/mockData';

export default function App() {
  // Current view: 'student' | 'kiosk' | 'librarian'
  const [currentView, setCurrentView] = useState('student');
  
  // Default logged-in user: Heera (2424068) for instant test readiness
  const [currentUser, setCurrentUser] = useState(INITIAL_STUDENTS[0]);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Core application state with LocalStorage backup
  const [books, setBooks] = useState(() => {
    const saved = localStorage.getItem('dsvv_lib_books');
    return saved ? JSON.parse(saved) : INITIAL_BOOKS;
  });

  const [preBookings, setPreBookings] = useState(() => {
    const saved = localStorage.getItem('dsvv_lib_bookings');
    return saved ? JSON.parse(saved) : INITIAL_PRE_BOOKINGS;
  });

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem('dsvv_lib_books', JSON.stringify(books));
  }, [books]);

  useEffect(() => {
    localStorage.setItem('dsvv_lib_bookings', JSON.stringify(preBookings));
  }, [preBookings]);

  // Handle Login
  const handleLoginSuccess = (student) => {
    setCurrentUser(student);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  // Pre-Book book from room
  const handlePreBookBook = (book) => {
    if (!currentUser) {
      setIsLoginModalOpen(true);
      return;
    }

    if (book.availableCopies <= 0) return;

    // Create new booking record
    const newBooking = {
      bookingId: `BK-2026-${Math.floor(100 + Math.random() * 900)}`,
      scholarId: currentUser.scholarId,
      studentName: currentUser.name,
      course: currentUser.course,
      bookId: book.id,
      bookTitle: book.title,
      author: book.author,
      accessionNo: book.accessionNo,
      shelfNo: book.shelfNo,
      compartmentNo: book.compartmentNo,
      floorSection: book.floorSection,
      bookedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      status: 'PRE_BOOKED'
    };

    setPreBookings(prev => [newBooking, ...prev]);

    // Decrement available copies
    setBooks(prev => prev.map(b => b.id === book.id ? { ...b, availableCopies: b.availableCopies - 1 } : b));
  };

  // Cancel Pre-Booking
  const handleCancelBooking = (bookingId) => {
    const target = preBookings.find(b => b.bookingId === bookingId);
    if (!target) return;

    setPreBookings(prev => prev.filter(b => b.bookingId !== bookingId));

    // Restore available copy count if it was pre-booked
    if (target.status === 'PRE_BOOKED') {
      setBooks(prev => prev.map(b => b.id === target.bookId ? { ...b, availableCopies: b.availableCopies + 1 } : b));
    }
  };

  // Issue Pre-Booking at Kiosk
  const handleIssueBooking = (bookingId) => {
    setPreBookings(prev => prev.map(b => b.bookingId === bookingId ? { ...b, status: 'ISSUED' } : b));
  };

  // Reset Demo Data
  const handleResetDemoData = () => {
    setBooks(INITIAL_BOOKS);
    setPreBookings(INITIAL_PRE_BOOKINGS);
    localStorage.removeItem('dsvv_lib_books');
    localStorage.removeItem('dsvv_lib_bookings');
  };

  const activeBookingsCount = currentUser 
    ? preBookings.filter(b => b.scholarId === currentUser.scholarId && b.status === 'PRE_BOOKED').length
    : 0;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--dsvv-light-bg)' }}>
      {/* Top Main Navigation Header */}
      <Header 
        currentView={currentView}
        setCurrentView={setCurrentView}
        currentUser={currentUser}
        onOpenLogin={() => setIsLoginModalOpen(true)}
        onLogout={handleLogout}
        activeBookingsCount={activeBookingsCount}
      />

      {/* Main Content Area depending on View */}
      <main style={{ flex: 1, paddingBottom: '40px' }}>
        {currentView === 'student' && (
          <StudentPortal 
            books={books}
            currentUser={currentUser}
            preBookings={preBookings}
            onPreBookBook={handlePreBookBook}
            onCancelBooking={handleCancelBooking}
            onOpenLogin={() => setIsLoginModalOpen(true)}
            onSwitchToKiosk={() => setCurrentView('kiosk')}
          />
        )}

        {currentView === 'kiosk' && (
          <KioskMode 
            preBookings={preBookings}
            books={books}
            onIssueBooking={handleIssueBooking}
            onPreBookBook={handlePreBookBook}
          />
        )}

        {currentView === 'librarian' && (
          <LibrarianView 
            books={books}
            preBookings={preBookings}
            students={INITIAL_STUDENTS}
            onResetDemoData={handleResetDemoData}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="no-print" style={{
        background: '#002244',
        color: '#94a3b8',
        padding: '20px',
        textAlign: 'center',
        fontSize: '0.82rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <strong>Dev Sanskriti Vishwavidyalaya (DSVV)</strong> — Central Library Services & Automation
          </div>
          <div>
            Integrated Physical Shelf System | Kiosk Release Version 2.0
          </div>
        </div>
      </footer>

      {/* Student Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}

// Seed dataset for Dev Sanskriti Vishwavidyalaya (DSVV) Digital Library

export const INITIAL_STUDENTS = [
  {
    scholarId: "2424068",
    name: "Heera",
    course: "B.Sc IT",
    dob: "01/08/2006",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    department: "Information Technology"
  },
  {
    scholarId: "2424100",
    name: "Gyan",
    course: "BCA",
    dob: "02/05/2006",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    department: "Computer Applications"
  },
  {
    scholarId: "2424301",
    name: "Govind",
    course: "BCA",
    dob: "05/07/2006",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    department: "Computer Applications"
  }
];

export const INITIAL_BOOKS = [
  {
    id: "B-101",
    title: "Database System Concepts & SQL",
    author: "Abraham Silberschatz & S. Sudarshan",
    department: "Computer Science & IT",
    accessionNo: "DSVV-LIB-9041",
    isbn: "978-0078022159",
    shelfNo: "Shelf S-04",
    compartmentNo: "Compartment C-02",
    floorSection: "Central Library - 1st Floor (IT Section)",
    totalCopies: 5,
    availableCopies: 3,
    rating: 4.8,
    description: "Fundamental principles of relational databases, query optimization, indexing, and transaction management.",
    coverBg: "linear-gradient(135deg, #003366 0%, #0066cc 100%)"
  },
  {
    id: "B-102",
    title: "Patanjali Yoga Sutra & Mental Science",
    author: "Swami Vivekananda & DSVV Research Cell",
    department: "Yogic Science & Holistic Health",
    accessionNo: "DSVV-LIB-1042",
    isbn: "978-8171101566",
    shelfNo: "Shelf S-12",
    compartmentNo: "Compartment C-04",
    floorSection: "Central Library - Ground Floor (Yoga Wing)",
    totalCopies: 8,
    availableCopies: 4,
    rating: 4.9,
    description: "In-depth analysis of Ashtanga Yoga, meditation techniques, and classical Sanskrit commentary.",
    coverBg: "linear-gradient(135deg, #d97706 0%, #003366 100%)"
  },
  {
    id: "B-103",
    title: "Data Structures & Algorithms in C++",
    author: "E. Balagurusamy",
    department: "Computer Science & IT",
    accessionNo: "DSVV-LIB-8819",
    isbn: "978-9352607976",
    shelfNo: "Shelf S-05",
    compartmentNo: "Compartment C-01",
    floorSection: "Central Library - 1st Floor (IT Section)",
    totalCopies: 6,
    availableCopies: 2,
    rating: 4.7,
    description: "Comprehensive guide to stacks, queues, trees, graphs, dynamic programming, and algorithm design.",
    coverBg: "linear-gradient(135deg, #0284c7 0%, #003366 100%)"
  },
  {
    id: "B-104",
    title: "Vedic Wisdom & Human Values",
    author: "Pt. Shriram Sharma Acharya",
    department: "Indian Culture & Vedic Studies",
    accessionNo: "DSVV-LIB-3012",
    isbn: "978-8171822017",
    shelfNo: "Shelf S-01",
    compartmentNo: "Compartment C-03",
    floorSection: "Central Library - Heritage Hall",
    totalCopies: 10,
    availableCopies: 7,
    rating: 5.0,
    description: "Core principles of Indian cultural heritage, moral philosophy, and scientific spirituality.",
    coverBg: "linear-gradient(135deg, #b45309 0%, #004080 100%)"
  },
  {
    id: "B-105",
    title: "Modern Web Development (React & Node.js)",
    author: "David Flanagan",
    department: "Computer Science & IT",
    accessionNo: "DSVV-LIB-9420",
    isbn: "978-1491952023",
    shelfNo: "Shelf S-06",
    compartmentNo: "Compartment C-05",
    floorSection: "Central Library - 1st Floor (IT Section)",
    totalCopies: 4,
    availableCopies: 1,
    rating: 4.9,
    description: "Full-stack web applications design using modern JavaScript ES6+, React, and RESTful APIs.",
    coverBg: "linear-gradient(135deg, #0f766e 0%, #003366 100%)"
  },
  {
    id: "B-106",
    title: "Anatomy & Physiology for Yoga Practitioners",
    author: "Dr. H.R. Nagendra",
    department: "Yogic Science & Holistic Health",
    accessionNo: "DSVV-LIB-1188",
    isbn: "978-8190390118",
    shelfNo: "Shelf S-14",
    compartmentNo: "Compartment C-02",
    floorSection: "Central Library - Ground Floor (Yoga Wing)",
    totalCopies: 5,
    availableCopies: 3,
    rating: 4.6,
    description: "Scientific investigation into muscular, respiratory, and nervous system responses to yogic postures.",
    coverBg: "linear-gradient(135deg, #0369a1 0%, #1e3a8a 100%)"
  },
  {
    id: "B-107",
    title: "Environmental Science & Eco Ecology",
    author: "Dr. S.C. Santra",
    department: "Environmental Science",
    accessionNo: "DSVV-LIB-5541",
    isbn: "978-8173814234",
    shelfNo: "Shelf S-09",
    compartmentNo: "Compartment C-04",
    floorSection: "Central Library - 2nd Floor (Science Wing)",
    totalCopies: 6,
    availableCopies: 5,
    rating: 4.5,
    description: "Study of biodiversity, environmental conservation, waste management, and renewable energy.",
    coverBg: "linear-gradient(135deg, #15803d 0%, #003366 100%)"
  },
  {
    id: "B-108",
    title: "Python Programming & Data Analytics",
    author: "Wesley J. Chun",
    department: "Computer Science & IT",
    accessionNo: "DSVV-LIB-9710",
    isbn: "978-0132269933",
    shelfNo: "Shelf S-07",
    compartmentNo: "Compartment C-03",
    floorSection: "Central Library - 1st Floor (IT Section)",
    totalCopies: 7,
    availableCopies: 4,
    rating: 4.8,
    description: "Core Python scripting, Pandas, NumPy, and data visualization for scientific computing.",
    coverBg: "linear-gradient(135deg, #4338ca 0%, #003366 100%)"
  }
];

export const INITIAL_PRE_BOOKINGS = [
  {
    bookingId: "BK-2026-901",
    scholarId: "2424068",
    studentName: "Heera",
    course: "B.Sc IT",
    bookId: "B-101",
    bookTitle: "Database System Concepts & SQL",
    author: "Abraham Silberschatz & S. Sudarshan",
    accessionNo: "DSVV-LIB-9041",
    shelfNo: "Shelf S-04",
    compartmentNo: "Compartment C-02",
    floorSection: "Central Library - 1st Floor (IT Section)",
    bookedAt: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // 30 mins ago
    expiresAt: new Date(Date.now() + 23.5 * 60 * 60 * 1000).toISOString(),
    status: "PRE_BOOKED" // "PRE_BOOKED" | "ISSUED" | "CANCELLED"
  }
];

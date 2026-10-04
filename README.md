# 🏛️ Dev Sanskriti Vishwavidyalaya (DSVV) - Digital Library & Pre-Booking System

> An automated library pre-booking and physical shelf location portal built for **Dev Sanskriti Vishwavidyalaya (देव संस्कृति विश्वविद्यालय), Haridwar**.

---

![DSVV Theme](public/dsvv_logo.png)

## 📌 Features

- **🛋️ Remote Dorm Room Pre-Booking**: Students can log in with their **Scholar ID** and **Date of Birth** to search and reserve library books remotely from their room with a 24-hour hold window.
- **📍 Integrated Shelf & Compartment Locator**: Shows real-time physical library shelf location data (e.g. `Shelf S-04 | Compartment C-02`) directly on book cards and issue slips.
- **🖨️ Campus Library Kiosk & Issue Slip Printer**: Self-service library kiosk mode where students type their Scholar ID (or scan ICARD) to instantly detect their pre-booking and print an official **DSVV Library Issue Slip**.
- **🔑 Scholar ID Authentication**: Scholar ID login backed by Date of Birth verification.
- **🛡️ Staff & Librarian Admin View**: Overview of total catalog inventory, active room pre-bookings, and kiosk issue slip logs.

---

## ⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/govindmaurya7408-alt/Dsvv-Library-Booking-System.git

# Navigate into project directory
cd Dsvv-Library-Booking-System

# Install dependencies
npm install

# Start local dev server
npm run dev
```

---

## 🧪 Demo Test Student Accounts

| Student Name | Course | Scholar ID | Date of Birth (Password) |
| :--- | :--- | :--- | :--- |
| **Heera** | B.Sc IT | `2424068` | `01/08/2006` |
| **Gyan** | BCA | `2424100` | `02/05/2006` |
| **Govind** | BCA | `2424301` | `05/07/2006` |

---

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Vanilla CSS with DSVV Brand Color System (`#003366`, `#0066cc`, `#ffffff`, `#f59e0b`)
- **Icons**: Lucide React
- **Printing**: Integrated browser CSS `@media print` engine for thermal/A4 slip printing

---

*Developed for Dev Sanskriti Vishwavidyalaya Central Library Automation.*

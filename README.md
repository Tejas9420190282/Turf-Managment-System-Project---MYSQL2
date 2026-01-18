# 🏟️ Turf Management System

A full‑stack **Turf Management System** built using **React, Tailwind CSS, Node.js, Express.js and MySQL** that allows users to find turfs, book slots, make online payments, and download entry passes, while admins can manage turfs and view bookings.

---

## 🚀 Features

### 👤 User Panel

* User Registration & Login (Authentication)
* Search turfs by **Area, City and Date**
* View available slots
* Book turf slots in real‑time
* Razorpay Payment Gateway Integration
* Download **PDF Entry Pass** after successful booking
* View booking history
* Forgot Password & Reset Password via Email Link

### 🛠️ Admin Panel

* Admin Login
* Add new turf
* Update turf details using Turf ID
* Delete turf
* View all bookings
* View bookings by specific turf

---

## 🧑‍💻 Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MySQL2
* JWT Authentication
* Nodemailer (Password Reset)
* Multer (Image Upload)
* Razorpay (Payments)
* PDFKit (Entry Pass Generation)

---

## 📂 Project Structure

```
Turf-Management-System
│

├── client (React Frontend)

│   ├── src

│   │   ├── components

│   │   ├── pages

│   │   ├── services

│   │   └── App.jsx

│   └── package.json

│

├── server (Node Backend)

│   ├── controllers

│   ├── routes

│   ├── models

│   ├── config

│   ├── middleware

│   └── server.js

│

└── database.sql
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Tejas9420190282/Turf-Managment-System-Project---MYSQL2.git
```

### 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create `.env` file in **server** folder:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=turf_management
JWT_SECRET=your_secret_key
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

Run Backend:

```bash
npm start
```

### 3️⃣ Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## 🗄️ Database Setup

1. Create MySQL database:

```sql
CREATE DATABASE turf_management;
```

2. Import `database.sql` file into MySQL.

---

## 🔐 Authentication Flow

* JWT based authentication
* Protected routes for Admin & User
* Role based access control

---

## 💳 Payment Flow (Razorpay)

1. User selects slot and books turf
2. Razorpay payment popup opens
3. After successful payment:

   * Booking stored in database
   * PDF Entry Pass generated
   * User can download entry pass

---

## 🏁 Future Enhancements

* Live slot availability using WebSockets
* Mobile App version
* Admin analytics dashboard
* Email booking confirmation

---

## 👨‍💼 Author

**Tejas Shimpi**
Full‑Stack Developer (TailwindCSS | React | Node.js | MYSQL)

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---

## 📜 License

This project is open‑source and free to use for learning purposes.

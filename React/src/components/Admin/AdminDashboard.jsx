

// AdminDashboard.jsx (React)

import React from 'react';
import AdminNavbar from './AdminNavbar';
import Card from './Card';

const AdminDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* AdminNavbar */}
      <AdminNavbar />

      {/* Main Content */}
      <main className="flex-1 p-6 ml-64">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold">Dashboard Overview</h1>
        </header>

        {/* Cards Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Total Number of Turfs */}
          <Card title="Total Number of Turfs" value="150" />

          {/* Card 2: Total Number of Bookings */}
          <Card title="Total Number of Bookings" value="320" />

          {/* Card 3: Total Revenue Generated */}
          <Card title="Total Revenue Generated" value="$12,500" />

          {/* Card 4: Upcoming Bookings */}
          <Card title="Upcoming Bookings">
            <ul className="mt-2">
              <li>Booking 1: 10/15/2023</li>
              <li>Booking 2: 10/16/2023</li>
              <li>Booking 3: 10/17/2023</li>
            </ul>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;



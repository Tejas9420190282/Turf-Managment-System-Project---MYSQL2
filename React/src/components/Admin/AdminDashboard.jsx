

// AdminDashboard.jsx (React)

import React from 'react';

import Card from './Card';
import AdminNavbar from './Admin_Navbar';

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

          {/* Card 4: Upcoming Bookings */}
          <Card title="Upcoming Bookings">
            <ul className="mt-2">
              
            </ul>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;



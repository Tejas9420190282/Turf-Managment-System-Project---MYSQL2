import React from 'react';

const AdminNavbar = () => {
  return (
    <>
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-semibold text-gray-800">Admin Section</h1>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white min-h-screen fixed">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <nav>
          <ul>
            <li className="hover:bg-gray-700">
              <a href="#home" className="block p-4">Admin Home</a>
            </li>
            <li className="hover:bg-gray-700">
              <a href="#bookings" className="block p-4">Add Turf</a>
            </li>
            <li className="hover:bg-gray-700">
              <a href="#turfs" className="block p-4">Remove Turf</a>
            </li>
            <li className="hover:bg-gray-700">
              <a href="#reports" className="block p-4">View Bookings</a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default AdminNavbar;
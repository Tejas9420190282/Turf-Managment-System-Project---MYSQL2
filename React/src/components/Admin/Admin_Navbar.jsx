
// AdminNavbar.jsx (React)

import React from 'react';
import { Link } from "react-router-dom";


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
              <Link to="/admin/home" className="block p-4">Admin Home</Link>
            </li>
            <li className="hover:bg-gray-700">
              <Link to="/admin/add-turn" className="block p-4">Add Turf</Link>
            </li>
            <li className="hover:bg-gray-700">
              <Link to="/admin/update-turn" className="block p-4">Update Turf</Link>
            </li>
            <li className="hover:bg-gray-700">
              <Link to="/admin/remove-turf" className="block p-4">Remove Turf</Link>
            </li>
            <li className="hover:bg-gray-700">
              <Link to="/admin/view-all-turf" className="block p-4">View All Turfs</Link>
            </li>
            <li className="hover:bg-gray-700">
              <Link to="/admin/view-booking-using-turf-location" className="block p-4">View Bookings</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default AdminNavbar;
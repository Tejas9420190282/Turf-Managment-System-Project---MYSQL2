import React from "react";
import AdminDashboard from "./AdminDashboard";
import AdminNavbar from "./Admin_Navbar";


function Turf_Result() {
 

    return (

        
        <div className="bg-gray-100 min-h-screen">
      {/* AdminNavbar */}
      <AdminNavbar />
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                
                        <h1 className="text-2xl font-bold text-green-600 mb-4">Success!</h1>
                        <p className="text-gray-700">Turf Created Successfully</p>
                    
                
            </div>
        </div>
    );
}

export default Turf_Result;
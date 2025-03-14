import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function ViewAllTurfList() {
    const [turfs, setTurfs] = useState([]); // State to store turf data
    const [loading, setLoading] = useState(true); // State to handle loading state
    const [error, setError] = useState(""); // State to handle errors
    const navigate = useNavigate(); // Hook for navigation

    // Fetch turf data from the backend
    useEffect(() => {
        const fetchTurfs = async () => {
            try {
                const response = await axios.get("http://localhost:4545/admin/view-all-turf");
                if (response.data.success) {
                    setTurfs(response.data.turfList); // Set turf data
                } else {
                    setError(response.data.message); // Set error message
                }
            } catch (error) {
                setError("Error fetching turf data. Please try again."); // Set error message
                console.error("Error fetching turf data:", error);
            } finally {
                setLoading(false); // Set loading to false
            }
        };

        fetchTurfs();
    }, []);

    // Function to handle Update Turf button click
    const handleUpdateTurf = () => {
        navigate("/admin/search-area-turf/:area"); // Redirect to the update turf page
    };

    // Display loading state
    if (loading) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    // Display error message
    if (error) {
        return <div className="text-center mt-10 text-red-600">{error}</div>;
    }

    // Display turf data in a table
    return (
        <div className="min-h-screen p-8 bg-gray-100">
            <h1 className="text-2xl font-bold text-center mb-8">All Turf List</h1>
            <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-3 px-4 border-b">Turf ID</th>
                            <th className="py-3 px-4 border-b">Turf Name</th>
                            <th className="py-3 px-4 border-b">Area</th>
                            <th className="py-3 px-4 border-b">City</th>
                            <th className="py-3 px-4 border-b">Pincode</th>
                            <th className="py-3 px-4 border-b">Light</th>
                            <th className="py-3 px-4 border-b">Price/hr</th>
                            <th className="py-3 px-4 border-b">Equipment</th>
                            <th className="py-3 px-4 border-b">Opening Time</th>
                            <th className="py-3 px-4 border-b">Closing Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {turfs.map((turf) => (
                            <tr key={turf.TURF_Id} className="hover:bg-gray-50">
                                <td className="py-3 px-4 border-b text-center">{turf.TURF_Id}</td>
                                <td className="py-3 px-4 border-b text-center">{turf.turf_name}</td>
                                <td className="py-3 px-4 border-b text-center">{turf.area}</td>
                                <td className="py-3 px-4 border-b text-center">{turf.city}</td>
                                <td className="py-3 px-4 border-b text-center">{turf.pincode}</td>
                                <td className="py-3 px-4 border-b text-center">{turf.light}</td>
                                <td className="py-3 px-4 border-b text-center">{turf.price_hr}</td>
                                <td className="py-3 px-4 border-b text-center">{turf.equipment}</td>
                                <td className="py-3 px-4 border-b text-center">{turf.openingTime}</td>
                                <td className="py-3 px-4 border-b text-center">{turf.closingTime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Update Turf Button */}
                <div className="mt-6 text-center">
                    <button
                        onClick={handleUpdateTurf}
                        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
                    >
                        Update Turf
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ViewAllTurfList;
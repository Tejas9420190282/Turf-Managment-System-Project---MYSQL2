import axios from 'axios';
import React, { useState } from 'react';

function View_Booking() {
    const [turfId, setTurfId] = useState("");
    const [turfData, setTurfData] = useState([]); // Initialize as an empty array
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!turfId) {
            setError("Turf ID is required");
            return;
        }

        try {
            const response = await axios.get("http://localhost:4545/view-booking-using-turfid", {
                params: {
                    turfId,
                },
            });

            if (response.data.success) {
                setTurfData(response.data.data); // Set the array of bookings
                setError("");
            } else {
                setError(response.data.message || "Failed to fetch booking data");
            }
        } catch (error) {
            setError("An error occurred. Please try again.");
            console.error(`Error: ${error.message}`);
        }
    };

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-4 text-center md:text-left">View Bookings by Turf ID</h1>
            
            {/* Responsive Form */}
            <div className="flex flex-col items-center md:items-start">
                <form onSubmit={handleSubmit} className="w-full max-w-md mb-6">
                    <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                        <input
                            type="number"
                            required
                            id="turfid"
                            name="turfid"
                            value={turfId}
                            onChange={(e) => setTurfId(e.target.value)}
                            placeholder="Enter Turf ID"
                            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>

                {error && <p className="text-red-600 mb-4 text-center md:text-left">{error}</p>}
            </div>

            {turfData.length > 0 && (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead className="bg-blue-600 text-white">
                            <tr>
                                <th className="px-4 py-2 border">Booking ID</th>
                                <th className="px-4 py-2 border">Player Name</th>
                                <th className="px-4 py-2 border">Contact</th>
                                <th className="px-4 py-2 border">Turf Name</th>
                                <th className="px-4 py-2 border">City</th>
                                <th className="px-4 py-2 border">Area</th>
                                <th className="px-4 py-2 border">Pincode</th>
                                <th className="px-4 py-2 border">Date</th>
                                <th className="px-4 py-2 border">Start Time</th>
                                <th className="px-4 py-2 border">End Time</th>
                                <th className="px-4 py-2 border">Light Required</th>
                                <th className="px-4 py-2 border">Equipment Required</th>
                                <th className="px-4 py-2 border">Price</th>
                                <th className="px-4 py-2 border">Slot ID</th>
                                <th className="px-4 py-2 border">Turf ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {turfData.map((booking) => (
                                <tr key={booking.id} className="hover:bg-gray-50 transition duration-200">
                                    <td className="px-4 py-2 border">{booking.id}</td>
                                    <td className="px-4 py-2 border">{booking.name}</td>
                                    <td className="px-4 py-2 border">{booking.contact}</td>
                                    <td className="px-4 py-2 border">{booking.turf_name}</td>
                                    <td className="px-4 py-2 border">{booking.city}</td>
                                    <td className="px-4 py-2 border">{booking.area}</td>
                                    <td className="px-4 py-2 border">{booking.pincode}</td>
                                    <td className="px-4 py-2 border">{new Date(booking.date).toLocaleDateString()}</td>
                                    <td className="px-4 py-2 border">{booking.start_time}</td>
                                    <td className="px-4 py-2 border">{booking.end_time}</td>
                                    <td className="px-4 py-2 border">{booking.requird_light}</td>
                                    <td className="px-4 py-2 border">{booking.requird_equipment}</td>
                                    <td className="px-4 py-2 border">₹{booking.price}</td>
                                    <td className="px-4 py-2 border">{booking.slote_id}</td>
                                    <td className="px-4 py-2 border">{booking.turf_id}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default View_Booking;

// View_Player_Data.js(React)

import axios from "axios";
import React, { useState } from "react";

function View_Player_Data() {
    const [sloteId, setSloteId] = useState("");
    const [turfId, setTurfId] = useState("");
    const [playerData, setPlayerData] = useState(null);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!sloteId || !turfId) {
            setError("Please enter valid Slot and Turf IDs");
            return;
        }
        setError("");

        try {
            const response = await axios.get("http://localhost:4545/view-booking-using-slote-number", {
                params: { sloteId, turfId },
            });

            if (response.data.success) {
                setPlayerData(response.data.data);
            } else {
                setPlayerData(null);
                setError("No data found for this Slot ID and Turf ID");
            }
        } catch (error) {
            console.error("Error fetching player data:", error.message);
            setError("Failed to fetch player data. Please try again.");
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-10">
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">View Player Booking</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="number"
                    placeholder="Enter Slot Number"
                    value={sloteId}
                    onChange={(e) => setSloteId(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="number"
                    placeholder="Enter Turf Number"
                    value={turfId}
                    onChange={(e) => setTurfId(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition"
                >
                    View Details
                </button>
            </form>

            {error && <p className="text-red-500 mt-2 text-center">{error}</p>}

            {playerData && (
                <div className="mt-6 p-4 bg-white rounded-md shadow-md overflow-x-auto">
                    <h3 className="text-lg font-semibold mb-3 text-gray-700">Player Booking Details</h3>
                    <table className="min-w-full border border-gray-200">
                        <thead>
                            <tr className="bg-blue-500 text-white">
                                <th className="py-2 px-4 border">Field</th>
                                <th className="py-2 px-4 border">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(playerData).map(([key, value]) => (
                                <tr key={key} className="hover:bg-gray-100">
                                    <td className="py-2 px-4 border font-semibold capitalize">{key.replace('_', ' ')}</td>
                                    <td className="py-2 px-4 border">{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default View_Player_Data;

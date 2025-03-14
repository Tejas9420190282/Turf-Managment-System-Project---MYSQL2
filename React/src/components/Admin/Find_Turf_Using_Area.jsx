
// find_Turf_Using_Area.js (Node)
import React, { useState } from "react";
import axios from "axios";
import Final_Turf_Update from "./Final_Turf_Update";

const Find_Turf_Using_Area = () => {
    const [area, setArea] = useState("");
    const [turf, setTurf] = useState(null);
    const [error, setError] = useState("");

    // Function to handle the search
    const handleSearch = async () => {
        try {
            setError("");
            setTurf(null);

            const response = await axios.get(
                `http://localhost:4545/find-turf-using-area/${area}`
            );

            if (response.data) {
                setTurf(response.data); // Set turf data
            } else {
                setError("Turf not found");
            }
        } catch (err) {
            console.error("Error fetching turf:", err);
            setError("Failed to fetch turf. Please try again.");
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Search Turf by Area</h1>

            {/* Search Input */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Enter area"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="border p-2 rounded w-full"
                />
            </div>

            {/* Search Button */}
            <button
                onClick={handleSearch}
                className="bg-blue-500 text-white p-2 rounded mb-4"
            >
                Search
            </button>

            {/* Display Error Message */}
            {error && <p className="text-red-500 mt-2">{error}</p>}

            {/* Display Turf Details and Edit Form */}
            {turf && <Final_Turf_Update turf={turf} setTurf={setTurf} />}
        </div>
    );
};

export default Find_Turf_Using_Area;


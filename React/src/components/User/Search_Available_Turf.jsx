
// Search_Available_Turf.jsx (React)

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Search_Available_Turf() {
    // Form fields
    const [city, setCity] = useState("");
    const [area, setArea] = useState("");
    const [booking_date, setBookingDate] = useState("");

    sessionStorage.setItem("Booking_Date", booking_date)

    // State to store fetched turf data
    const [turfData, setTurfData] = useState([]);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(
            `City: ${city}, Area: ${area}, Booking Date: ${booking_date}`
        );

        try {
            
            const response = await axios.get(
                "http://localhost:4545/search-available-turf-submit",
                {
                    params: { city, area, booking_date },
                }
            );
            console.log("Response Data:", response.data); // Debugging log
            setTurfData(response.data.availableSlots); // Store response in state

            sessionStorage.setItem("TurfData", JSON.stringify(response.data.availableSlots))
        } 
        catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Function to handle slot selection
    const handleSelectSlot = (turfId, sloteId) => {
        console.log(`Selected Turf ID: ${turfId}, Slot ID: ${sloteId}`);
        // Add your logic here to handle slot selection (e.g., redirect to booking page)
        toast.success(`Selected Turf ID: ${turfId}, Slot ID: ${sloteId}`);

        navigate(`/user/search-available-turf/selected-available-slote/${sloteId}/turfid/${turfId}`);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="p-4 space-y-4">
                <input
                    type="text"
                    id="city"
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    placeholder="Enter City"
                    className="border p-2 rounded-md"
                />

                <input
                    type="text"
                    id="area"
                    name="area"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    required
                    placeholder="Enter Area"
                    className="border p-2 rounded-md"
                />

                <input
                    type="date"
                    id="date"
                    name="date"
                    value={booking_date}
                    onChange={(e) => setBookingDate(e.target.value)}
                    required
                    className="border p-2 rounded-md"
                />

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Find Turf
                </button>
            </form>

            {/* Display data in table format */}
            {turfData?.length > 0 && (
                <div className="mt-4">
                    <h2 className="text-lg font-bold">Available Turfs</h2>
                    <table className="border-collapse border border-gray-400 w-full mt-2">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border p-2">Turf Name</th>
                                <th className="border p-2">City</th>
                                <th className="border p-2">Area</th>
                                <th className="border p-2">Pincode</th>
                                <th className="border p-2">Light</th>
                                <th className="border p-2">Price (₹/hr)</th>
                                <th className="border p-2">Start Time</th>
                                <th className="border p-2">End Time</th>
                                <th className="border p-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {turfData.map((turf, index) => (
                                <tr key={turf.slote_id} className="text-center">
                                    <td className="border p-2">{turf.turf_name}</td>
                                    <td className="border p-2">{turf.city}</td>
                                    <td className="border p-2">{turf.area}</td>
                                    <td className="border p-2">{turf.pincode}</td>
                                    <td className="border p-2">{turf.light}</td>
                                    <td className="border p-2">{turf.price_hr}</td>
                                    <td className="border p-2">{turf.start_time}</td>
                                    <td className="border p-2">{turf.end_time}</td>
                                    <td className="border p-2">
                                        <button
                                            onClick={() =>
                                                handleSelectSlot(turf.TURF_Id, turf.slote_id, index)
                                            }
                                            className="bg-green-500 text-white px-4 py-2 rounded-md"
                                        >
                                            Select Slot
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
}

export default Search_Available_Turf;



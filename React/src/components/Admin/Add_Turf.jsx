
// Add_Turf.jsx (React)

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add_Turf() {
    const [form, setForm] = useState({
        turf_name: "",
        area: "",
        city: "",
        pincode: "",
        light: "",
        price_hr: "",
        equipment: "",
        openingTime: "",
        closingTime: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:4545/add-turf-submit", form);
            console.log("Turf created successfully:", response.data);
            alert("Turf created successfully!");

            navigate(response.data.redirect);

        } catch (error) {
            console.error("Error creating turf:", error);
            alert("Error creating turf. Please try again.");
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Create Turf</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Turf Name */}
                <div>
                    <label className="block text-gray-700 font-semibold">Turf Name:</label>
                    <input
                        type="text"
                        name="turf_name"
                        value={form.turf_name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Area */}
                <div>
                    <label className="block text-gray-700 font-semibold">Area:</label>
                    <input
                        type="text"
                        name="area"
                        value={form.area}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* City */}
                <div>
                    <label className="block text-gray-700 font-semibold">City:</label>
                    <input
                        type="text"
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Pincode */}
                <div>
                    <label className="block text-gray-700 font-semibold">Pincode:</label>
                    <input
                        type="text"
                        name="pincode"
                        value={form.pincode}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Light */}
                <div>
                    <label className="block text-gray-700 font-semibold">Light:</label>
                    <select
                        name="light"
                        value={form.light}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>

                {/* Price per Hour */}
                <div>
                    <label className="block text-gray-700 font-semibold">Price/hr:</label>
                    <input
                        type="text"
                        name="price_hr"
                        value={form.price_hr}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Equipment */}
                <div>
                    <label className="block text-gray-700 font-semibold">Equipment:</label>
                    <select
                        name="equipment"
                        value={form.equipment}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>

                {/* Opening Time */}
                <div>
                    <label className="block text-gray-700 font-semibold">Opening Time:</label>
                    <input
                        type="time"
                        name="openingTime"
                        value={form.openingTime}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Closing Time */}
                <div>
                    <label className="block text-gray-700 font-semibold">Closing Time:</label>
                    <input
                        type="time"
                        name="closingTime"
                        value={form.closingTime}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
                >
                    Submit Data
                </button>
            </form>
        </div>
    );
}

export default Add_Turf;

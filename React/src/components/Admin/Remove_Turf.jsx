
// Remove_Turf.jsx (React)
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Remove_Turf() {
    const [area, setArea] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        try {
            const response = await axios.delete("http://localhost:4545/delete-turf", {
                data: { area } // Send area in the request body
            });

            if (response.data.success) {
                toast.success("Turf Deleted Successfully");
                navigate("/admin"); // Redirect to admin page
            } else {
                setError("Failed to delete turf. Please try again.");
            }
        } catch (err) {
            console.error("Error deleting turf:", err);
            setError("Failed to delete turf. Please try again.");
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Delete Turf by Area</h1>

            {/* Display Error Message */}
            {error && <p className="text-red-500 mb-4">{error}</p>}

            {/* Delete Turf Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block">Area</label>
                    <input
                        type="text"
                        placeholder="Enter area"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        required
                        className="border p-2 rounded w-full"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-red-500 text-white p-2 rounded"
                >
                    Delete Turf
                </button>
            </form>
        </div>
    );
}

export default Remove_Turf;




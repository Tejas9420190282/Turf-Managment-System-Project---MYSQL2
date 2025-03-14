
// Final_Turf_Update.js (Node)

import React, { useState, useEffect } from "react";
import axios from "axios";

function Final_Turf_Update({ turf, setTurf }) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        turf_name: "",
        area: "",
        city: "",
        pincode: "",
        light: "",
        price_hr: "",
        equipment: "",
        openingTime: "",
        closingTime: "",
        image_URL: "",
    });

    // Initialize formData when turf prop changes
    useEffect(() => {
        if (turf && turf.row) {
            setFormData(turf.row); // Set formData with the nested turf data
        }
    }, [turf]);

    // Handle input changes in the form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission to update turf details
    const handleUpdate = async () => {
        try {
            console.log("Form Data being sent:", formData); // Debugging line

            const response = await axios.put(
                "http://localhost:4545/update-turf", // Correct endpoint
                formData // Send all form data in the request body
            );

            if (response.status === 200) {
                alert("Turf updated successfully!");
                setIsEditing(false); // Exit edit mode
                setTurf({ ...turf, row: formData }); // Update displayed turf data
            }
        } catch (err) {
            console.error("Error updating turf:", err);
            alert("Failed to update turf. Please try again.");
        }
    };

    return (
        <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Turf Details</h2>

            {/* Edit Button */}
            <button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-green-500 text-white p-2 rounded mb-4"
            >
                {isEditing ? "Cancel Edit" : "Edit Turf"}
            </button>

            {/* Turf Details Form */}
            <form className="space-y-4">
                <div>
                    <label className="block">Turf Name</label>
                    <input
                        type="text"
                        name="turf_name"
                        value={formData.turf_name || ""}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="border p-2 rounded w-full"
                    />
                </div>
                <div>
                    <label className="block">Area</label>
                    <input
                        type="text"
                        name="area"
                        value={formData.area || ""}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="border p-2 rounded w-full"
                        readOnly
                    />
                </div>
                <div>
                    <label className="block">City</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city || ""}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="border p-2 rounded w-full"
                    />
                </div>
                <div>
                    <label className="block">Pincode</label>
                    <input
                        type="text"
                        name="pincode"
                        value={formData.pincode || ""}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="border p-2 rounded w-full"
                    />
                </div>
                <div>
                    <label className="block">Light</label>
                    <input
                        type="text"
                        name="light"
                        value={formData.light || ""}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="border p-2 rounded w-full"
                    />
                </div>
                <div>
                    <label className="block">Price per Hour</label>
                    <input
                        type="number"
                        name="price_hr"
                        value={formData.price_hr || ""}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="border p-2 rounded w-full"
                    />
                </div>
                <div>
                    <label className="block">Equipment</label>
                    <input
                        type="text"
                        name="equipment"
                        value={formData.equipment || ""}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="border p-2 rounded w-full"
                    />
                </div>
                <div>
                    <label className="block">Opening Time</label>
                    <input
                        type="text"
                        name="openingTime"
                        value={formData.openingTime || ""}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="border p-2 rounded w-full"
                    />
                </div>
                <div>
                    <label className="block">Closing Time</label>
                    <input
                        type="text"
                        name="closingTime"
                        value={formData.closingTime || ""}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="border p-2 rounded w-full"
                    />
                </div>
                <div>
                    <label className="block">Image URL</label>
                    <input
                        type="text"
                        name="image_URL"
                        value={formData.image_URL || ""}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="border p-2 rounded w-full"
                    />
                </div>

                {/* Update Button (Visible only in edit mode) */}
                {isEditing && (
                    <button
                        type="button"
                        onClick={handleUpdate}
                        className="bg-blue-500 text-white p-2 rounded"
                    >
                        Update Turf
                    </button>
                )}
            </form>
        </div>
    );
}

export default Final_Turf_Update;


/* 
import React, { useState, useEffect } from "react";
import axios from "axios";

function Final_Turf_Update({ turf, setTurf }) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        turf_name: "",
        area: "",
        city: "",
        pincode: "",
        light: "",
        price_hr: "",
        equipment: "",
        openingTime: "",
        closingTime: "",
        image_URL: "",
    });

    // Initialize formData when turf prop changes
    useEffect(() => {
        if (turf && turf.row) {
            setFormData(turf.row); // Set formData with the nested turf data
        }
    }, [turf]);

    // Handle input changes in the form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission to update turf details
    const handleUpdate = async () => {
        try {
            const response = await axios.put(
                `http://localhost:4545/update-turf`,
                formData
            );

            if (response.status === 200) {
                alert("Turf updated successfully!");
                setIsEditing(false); // Exit edit mode
                setTurf({ ...turf, row: formData }); // Update displayed turf data
            }
        } catch (err) {
            console.error("Error updating turf:", err);
            alert("Failed to update turf. Please try again.");
        }
    };

    return (
        <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Turf Details</h2>

            {/* Edit Button 
            <button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-green-500 text-white p-2 rounded mb-4"
            >
                {isEditing ? "Cancel Edit" : "Edit Turf"}
            </button>

            {/* Turf Details Form 
            <form className="space-y-4">
                <div>
                    <label className="block">Turf Name</label>
                    <input
                        type="text"
                        name="turf_name"
                        value={formData.turf_name || ""}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="border p-2 rounded w-full"
                    />
                </div>
                <div>
                    <label className="block">Area</label>
                    <input
                        type="text"
                        name="area"
                        value={formData.area || ""}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="border p-2 rounded w-full"
                        readOnly
                    />
                </div>
                <div>
                    <label className="block">City</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city || ""}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="border p-2 rounded w-full"
                    />
                </div>
                <div>
                    <label className="block">Pincode</label>
                    <input
                        type="text"
                        name="pincode"
                        value={formData.pincode || ""}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="border p-2 rounded w-full"
                    />
                </div>
                <div>
                    <label className="block">Light</label>
                    <input
                        type="text"
                        name="light"
                        value={formData.light || ""}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="border p-2 rounded w-full"
                    />
                </div>
                <div>
                    <label className="block">Price per Hour</label>
                    <input
                        type="number"
                        name="price_hr"
                        value={formData.price_hr || ""}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="border p-2 rounded w-full"
                    />
                </div>
                <div>
                    <label className="block">Equipment</label>
                    <input
                        type="text"
                        name="equipment"
                        value={formData.equipment || ""}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="border p-2 rounded w-full"
                    />
                </div>
                <div>
                    <label className="block">Opening Time</label>
                    <input
                        type="text"
                        name="openingTime"
                        value={formData.openingTime || ""}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="border p-2 rounded w-full"
                    />
                </div>
                <div>
                    <label className="block">Closing Time</label>
                    <input
                        type="text"
                        name="closingTime"
                        value={formData.closingTime || ""}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="border p-2 rounded w-full"
                    />
                </div>
                <div>
                    <label className="block">Image URL</label>
                    <input
                        type="text"
                        name="image_URL"
                        value={formData.image_URL || ""}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="border p-2 rounded w-full"
                    />
                </div>

                {/* Update Button (Visible only in edit mode) 
                {isEditing && (
                    <button
                        type="button"
                        onClick={handleUpdate}
                        className="bg-blue-500 text-white p-2 rounded"
                    >
                        Update Turf
                    </button>
                )}
            </form>
        </div>
    );
}

export default Final_Turf_Update;
 */

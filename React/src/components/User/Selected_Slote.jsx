

// Selected_Slote.js (React)

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Selected_Slote() {
    const { sloteid, turfid } = useParams();
    const [turfData, setTurfData] = useState(null);
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [slote_id, setSlote_Id] = useState("");
    const [turf_id, setTurf_Id] = useState("");
    const [start_time, setStart_Time] = useState("");
    const [end_time, setEnd_Time] = useState("");
    const [light, setLight] = useState("");
    const [equipment, setEquipment] = useState("");
    const [area, setArea] = useState("");
    const [city, setCity] = useState("");
    const [pin, setPin] = useState("");
    const [basePrice, setBasePrice] = useState("");
    const [totalPrice, setTotalPrice] = useState("");
    const [turfName, setTurfName] = useState("");
    const [date, setDate] = useState("");

    const Booking_Date = sessionStorage.getItem("Booking_Date");

    const calculateTotalPrice = (basePrice, light, equipment) => {
        let total = basePrice;

        if (light === "Yes") {
            total = total + 100;
        }

        if (equipment === "Yes") {
            total = total + 100;
        }

        setTotalPrice(total);
    };

    const handleLightChange = (val) => {
        setLight(val);
        calculateTotalPrice(basePrice, val, equipment);
    };

    const handleEquipmentChange = (val) => {
        setEquipment(val);
        calculateTotalPrice(basePrice, light, val);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response1 = await axios.post(
                    "http://localhost:4545/selected-available-slote",
                    { sloteid, turfid }
                );

                if (response1.data.success) {
                    const data = response1.data.booked_Slote[0];

                    setTurfData(data);
                    setSlote_Id(data.slote_id);
                    setTurf_Id(data.TURF_Id);
                    setTurfName(data.turf_name);
                    setStart_Time(data.start_time);
                    setEnd_Time(data.end_time);
                    setLight(data.light);
                    setEquipment(data.equipment);
                    setArea(data.area);
                    setCity(data.city);
                    setPin(data.pincode);
                    setBasePrice(data.price_hr);

                    // Calculate initial total price
                    calculateTotalPrice(
                        data.price_hr,
                        data.light,
                        data.equipment
                    );
                    setDate(Booking_Date);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [sloteid, turfid]);

    const handlePayment = async (e) => {
        e.preventDefault();

        try {
            const response2 = await axios.post(
                "http://localhost:4545/payment",
                {
                    turfData,
                    name,
                    contact,
                    slote_id,
                    turf_id,
                    start_time,
                    end_time,
                    light,
                    equipment,
                    area,
                    city,
                    pin,
                    basePrice,
                    totalPrice,
                    turfName,
                    date,
                }
            );

            const { order } = response2.data;

            const options = {
                key: "rzp_test_6Pg8m8ifI60Xmi", // Your Razorpay key ID
                amount: order.amount,
                currency: order.currency,
                name: "Turf Booking",
                description: "Booking for selected slot",
                order_id: order.id,
                handler: async function (response) {
                    // Step 3: Verify payment on the backend
                    const verifyResponse = await axios.post(
                        "http://localhost:4545/payment/verify",
                        {
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                        }
                    );

                    if (verifyResponse.data.success) {
                        alert("Payment successful!");
                        // Redirect or show success message
                        window.location.href = "/success-booking";
                    } else {
                        alert("Payment verification failed.");
                    }
                },
                prefill: {
                    name, // Prefill customer name
                    contact, // Prefill customer phone number
                },
                theme: {
                    color: "#3399cc",
                },
            };

            const rzp = new window.Razorpay(options); // Use window.Razorpay
            rzp.open();
        } catch (error) {
            console.error("Error during payment:", error);
            alert("Payment failed. Please try again.");
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-4">
                Selected Slot Details
            </h2>

            <form className="space-y-4" onSubmit={handlePayment}>
                {/* Slote ID */}
                <div>
                    <label className="block text-gray-300">Slote ID:</label>
                    <input
                        type="text"
                        value={slote_id}
                        readOnly
                        className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                    />
                </div>

                {/* Player Name */}
                <div>
                    <label className="block text-gray-300">Player Name:</label>
                    <input
                        type="text"
                        placeholder="Enter player name"
                        required
                        className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                {/* Contact Number */}
                <div>
                    <label className="block text-gray-300">
                        Contact Number :
                    </label>
                    <input
                        type="text"
                        placeholder="Enter contact number"
                        className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                    />
                </div>

                {/* Turf ID */}
                <div>
                    <label className="block text-gray-300">Turf ID :</label>
                    <input
                        type="text"
                        value={turf_id}
                        readOnly
                        className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                    />
                </div>

                {/* Turf Name */}
                <div>
                    <label className="block text-gray-300">Turf Name : </label>
                    <input
                        type="text"
                        value={turfName}
                        readOnly
                        className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                    />
                </div>

                {/* city */}
                <div>
                    <label className="block text-gray-300">City :</label>
                    <input
                        type="text"
                        value={city}
                        readOnly
                        className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                    />
                </div>

                {/* area */}
                <div>
                    <label className="block text-gray-300">Area :</label>
                    <input
                        type="text"
                        value={area}
                        readOnly
                        className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                    />
                </div>

                {/* Pincode */}
                <div>
                    <label className="block text-gray-300">Pincode :</label>
                    <input
                        type="text"
                        value={pin}
                        readOnly
                        className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                    />
                </div>

                {/* Date */}
                <div>
                    <label className="block text-gray-300">Date : </label>
                    <input
                        type="text"
                        value={date}
                        readOnly
                        className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                    />
                </div>

                {/* Start Time */}
                <div>
                    <label className="block text-gray-300">Start Time:</label>
                    <input
                        type="text"
                        value={start_time}
                        readOnly
                        className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                    />
                </div>

                {/* End Time */}
                <div>
                    <label className="block text-gray-300">End Time:</label>
                    <input
                        type="text"
                        value={end_time}
                        readOnly
                        className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                    />
                </div>

                {/* Light Required */}
                <div>
                    <p className="block text-gray-300">Light Required:</p>
                    <div className="flex gap-4">
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="light_required"
                                value="Yes"
                                checked={light === "Yes"}
                                onChange={() => handleLightChange("Yes")}
                                className="accent-green-500"
                            />
                            <span>Yes</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="light_required"
                                value="No"
                                checked={light === "No"}
                                onChange={() => handleLightChange("No")}
                                className="accent-red-500"
                            />
                            <span>No</span>
                        </label>
                    </div>
                </div>

                {/* Equipment Required */}
                <div>
                    <p className="block text-gray-300">Equipment Required:</p>
                    <div className="flex gap-4">
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="equipment_required"
                                value="Yes"
                                checked={equipment === "Yes"}
                                onChange={() => handleEquipmentChange("Yes")}
                                className="accent-green-500"
                            />
                            <span>Yes</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="equipment_required"
                                value="No"
                                checked={equipment === "No"}
                                onChange={() => handleEquipmentChange("No")}
                                className="accent-red-500"
                            />
                            <span>No</span>
                        </label>
                    </div>
                </div>

                <div>
                    <label className="block text-gray-300">Price :</label>
                    <input
                        type="text"
                        value={totalPrice}
                        readOnly
                        className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-2 rounded mt-4"
                >
                    Pay Now
                </button>
            </form>
        </div>
    );
}

export default Selected_Slote;

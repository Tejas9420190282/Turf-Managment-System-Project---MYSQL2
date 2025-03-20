
// generateSlotsForTurf.js (node function)

const { mySqlConnectionPool } = require("../../Config/Db");

const generateSlotsForTurf = async (turfId, openingTime, closingTime) => {
    try {
        // Step 1: Convert opening and closing time into total minutes
        const openingHour = parseInt(openingTime.split(':')[0]); // Get hours (e.g., 8)
        const openingMinute = parseInt(openingTime.split(':')[1]); // Get minutes (e.g., 0)
        const openingTotalMinutes = openingHour * 60 + openingMinute; // Convert to total minutes

        const closingHour = parseInt(closingTime.split(':')[0]); // Get hours (e.g., 20)
        const closingMinute = parseInt(closingTime.split(':')[1]); // Get minutes (e.g., 0)
        const closingTotalMinutes = closingHour * 60 + closingMinute; // Convert to total minutes

        // Step 2: Calculate the number of slots
        const slotDuration = 60; // Each slot is 1 hour (60 minutes)
        const numberOfSlots = (closingTotalMinutes - openingTotalMinutes) / slotDuration;

        // Step 3: Loop to create each slot
        for (let i = 0; i < numberOfSlots; i++) {
            // Calculate start and end time for each slot
            const slotStartMinutes = openingTotalMinutes + i * slotDuration; // Start time in minutes
            const slotEndMinutes = slotStartMinutes + slotDuration; // End time in minutes

            // Convert minutes back to "HH:MM:SS" format
            const startHour = Math.floor(slotStartMinutes / 60); // Get hours
            const startMinute = slotStartMinutes % 60; // Get minutes
            const startTime = `${String(startHour).padStart(2, '0')}:${String(startMinute).padStart(2, '0')}:00`; // Format as "HH:MM:SS"

            const endHour = Math.floor(slotEndMinutes / 60); // Get hours
            const endMinute = slotEndMinutes % 60; // Get minutes
            const endTime = `${String(endHour).padStart(2, '0')}:${String(endMinute).padStart(2, '0')}:00`; // Format as "HH:MM:SS"

            // Step 4: Insert the slot into the database
            await mySqlConnectionPool.query(
                `INSERT INTO slote (start_time, end_time, turf_id) 
                 VALUES (?, ?, ?)`,
                [startTime, endTime, turfId]
            );

            console.log(`Slot created: ${startTime} - ${endTime} for turf ID: ${turfId}`);
        }

        console.log(`✅ All slots generated successfully for turf ID: ${turfId}`.bgGreen);
    } catch (error) {
        console.log(`❌ Error generating slots: ${error.message}`.bgRed);
    }
};

exports.generateSlotsForTurf = generateSlotsForTurf


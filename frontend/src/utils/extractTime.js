// formatTime.js
export const extractTime = (timestamp) => {
    // Create a Date object from the MongoDB timestamp
    const date = new Date(timestamp);

    // Extract hours and minutes
    const hours = date.getHours(); // Get hours (0-23)
    const minutes = date.getMinutes(); // Get minutes (0-59)

    // Format hours and minutes to always be two digits
    const formattedHours = String(hours).padStart(2, '0'); // Ensure two digits (e.g., "09")
    const formattedMinutes = String(minutes).padStart(2, '0'); // Ensure two digits (e.g., "05")

    // Return time in "HH:MM" format
    return `${formattedHours}:${formattedMinutes}`;
};
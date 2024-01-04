const fs = require('fs');
const axios = require('axios');

class SeatService {
 
  static async updateSeatsInJsonFile(selectedSeats) {
    try {
      const jsonFilePath = 'container/seats.json'; // Replace with the actual path to your JSON file

      // Read the JSON file
      const rawData = fs.readFileSync(jsonFilePath);
      const seats = JSON.parse(rawData);

      // Update the status of selected seats
      for (const seat of selectedSeats) {
        const foundSeat = seats.find((s) => s.name === seat.name);

        if (foundSeat) {
          foundSeat.status = 'occupied';
        }
      }

      // Write the updated data back to the JSON file
      fs.writeFileSync(jsonFilePath, JSON.stringify(seats, null, 2));

      return seats; // You can return the updated seats if needed
    } catch (error) {
      throw error;
    }
  }
}

// Example usage:
const selectedSeats = [
  { name: 'A1', status: 'available', price: 300 },
  // Add other selected seats as needed
];

 SeatService.updateSeatsInJsonFile(selectedSeats);

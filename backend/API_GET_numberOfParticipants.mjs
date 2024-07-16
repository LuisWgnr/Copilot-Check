// Import the function to fetch market data
import { fetchMarketData } from './API_GET_market.mjs';

// Function to fetch and process the energy mix data
function getNumberOfParticipants() {
    return fetchMarketData()
      .then(data => {
        const numberParticipants = data.number_of_market_participants; // Extract only the energy mix
        const participants = numberParticipants.map(participant => {
            return {
                type: participant.type,
                number: participant.number
            };
        });
        console.log('Participants data processed.', participants); // Log after processing data
        return participants; // Return the processed participants data
      })
      .catch(error => {
        console.error('Error fetching market data:', error);
        throw error; // Rethrow to allow the caller to handle it
      });
}

export { getNumberOfParticipants };
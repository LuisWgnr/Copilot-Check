// UseAPI.js

const { fetchMarketData } = require('./API_GET_market.js');

// Function to fetch and process the energy mix data
function getEnergyMix() {
  return fetchMarketData()
    .then(data => {
      const energyMix = data.energy_mix; // Extract only the energy mix
      const generationPower = {}; // Object to hold generation types and their power

      energyMix.forEach(energy => {
        const { generation_type, total_installed_power_in_watt } = energy;
        generationPower[generation_type] = total_installed_power_in_watt;
      });

      return generationPower; // Return the object containing generation types and their power
    })
    .catch(error => {
      console.error('Error fetching market data:', error);
      throw error; // Rethrow to allow the caller to handle it
    });
}

// Export the function that fetches and processes the energy mix
module.exports = { getEnergyMix };

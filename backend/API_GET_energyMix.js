// UseAPI.js

const { fetchMarketData } = require('./API_GET_market.js');

// Use the imported function and adjust to only log the energy mix
fetchMarketData()
  .then(data => {
    const energyMix = data.energy_mix; // Extract only the energy mix
    const generationPower = {}; // Object to hold generation types and their power

    energyMix.forEach(energy => {
      const { generation_type, total_installed_power_in_watt } = energy;
      generationPower[generation_type] = total_installed_power_in_watt;
    });

    console.log(generationPower); // Log the object containing generation types and their power
  })
  .catch(error => {
    console.error('Error fetching market data:', error);
  });

// Export Energy Mix
module.exports = generationPower;

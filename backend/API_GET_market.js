// Purpose: Fetch market data from the API
const { marketAddress } = require('./address.js');

function fetchMarketData() {
  const apiUrl = 'https://b2e2-energyscan-webapp-privatechain-prod.azurewebsites.net/api/markets/{market_authority_idc_address}';
  const url = apiUrl.replace('{market_authority_idc_address}', marketAddress);

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }
      return response.json();
    });
}

// Export the function
module.exports = { fetchMarketData };
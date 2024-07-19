// API-Endpoint URL
const apiUrl = 'https://b2e2-energyscan-webapp-privatechain-prod.azurewebsites.net/api/markets/{market_authority_idc_address}/tx/token-transfers?page=1&per_page=10';

// Replace {market_authority_idc_address} with the actual address
const marketAuthorityIdcAddress = '0x4995241d2f0781D96c49D418e4A0fCF812d7ebA3'; // Insert Ethereum checksum address here
const url = apiUrl.replace('{market_authority_idc_address}', marketAuthorityIdcAddress);

// Perform a GET request
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Process the received data
  })
  .catch(error => {
    // Handle errors
    console.error('There has been a problem with your fetch operation:', error);
  });
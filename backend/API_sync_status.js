async function getBlockchainSyncStatus() {
    const url = 'https://b2e2-energyscan-webapp-privatechain-prod.azurewebsites.net/api/utils/blockchain-sync-status';
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok' + response.statusText);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }
  
  getBlockchainSyncStatus();
  
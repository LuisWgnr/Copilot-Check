import { marketAddress } from './address.mjs';

function fetchlast10TX() {
    const apiUrl = 'https://b2e2-energyscan-webapp-privatechain-prod.azurewebsites.net/api/markets/{market_authority_idc_address}/tx/token-transfers?page=1&per_page=10';
    const url = apiUrl.replace('{market_authority_idc_address}', marketAddress);

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => data.items.map(({ blocknumber, tx_hash }) => ({ blocknumber, tx_hash })));
}

// Export the function
export { fetchlast10TX };
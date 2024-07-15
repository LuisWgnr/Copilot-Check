// Purpose: Fetch authority data from the API
import { marketAddress } from './address.mjs';

function fetchAuthorities() {
    const apiUrl = 'https://b2e2-energyscan-webapp-privatechain-prod.azurewebsites.net/api/markets/{market_authority_idc_address}/idc/authorities';
    const url = apiUrl.replace('{market_authority_idc_address}', marketAddress);

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            
            // Parse the response body as JSON
            return response.json(); // This returns a promise that resolves with the result of parsing the body text as JSON
        })
        .then(data => {
            // Now `data` is the parsed JSON object
            const items = data.items;
    
            if (!items) {
                throw new Error('Items are undefined');
            }
    
            const authorityAdresses = items.map(item => ({
                authority_type: item.authority_type,
                address: item.address
            }));
    
            console.log(authorityAdresses);
    
            return authorityAdresses;
        });
}


// Export the function
export { fetchAuthorities };
fetchAuthorities();

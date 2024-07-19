import { marketAddress } from './address.mjs';

function fetchClaims(page) {
    const apiUrl = 'https://b2e2-energyscan-webapp-privatechain-prod.azurewebsites.net/api/markets/{market_authority_idc_address}/tx/claim-publications?page=1&per_page=20';
    const urlPre = apiUrl.replace('{market_authority_idc_address}', marketAddress);
    const url = urlPre.replace('{page}', page);

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Ensure we are modifying the items within the data object
            const filteredData = data.items.map(item => ({
                subject: item.subject,
                topic: item.topic,
                issuer: item.issuer,
                valid_from: item.valid_from,
                valid_to: item.valid_to,
                blocknumber: item.blocknumber,
                tx_hash: item.tx_hash
            }));
            //console.log(filteredData); // Print the filtered data to the console
            return { ...data, items: filteredData }; // Return the modified data object
        });
}


// Export the function
export { fetchClaims };
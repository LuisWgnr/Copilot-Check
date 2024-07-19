import { marketAddress } from './address.mjs';

function fetchEnergyDoc(page) {
    const apiUrl = 'https://b2e2-energyscan-webapp-privatechain-prod.azurewebsites.net/api/markets/{market_authority_idc_address}/tx/energy-documentations?page=1&per_page=20';
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
                energy_value: item.value,
                typ: item.plant_type,
                plant: item.plant_idc_address,
                begin_balance_period: item.balance_period,
                metering_Aut: item.metering_authority_idc_address,
                corrected: item.corrected,
                blocknumber: item.blocknumber,
                tx_hash: item.tx_hash
            }));
            console.log(filteredData); // Print the filtered data to the console
            return { ...data, items: filteredData }; // Return the modified data object
        });
}


// Export the function
export { fetchEnergyDoc };
fetchEnergyDoc(1);
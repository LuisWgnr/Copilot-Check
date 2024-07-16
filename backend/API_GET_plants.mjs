// Purpose: Fetch authority data from the API
import { marketAddress } from './address.mjs';

function fetchPlants(page) {
    const apiUrl = 'https://b2e2-energyscan-webapp-privatechain-prod.azurewebsites.net/api/markets/{market_authority_idc_address}/idc/plants?page={page}&per_page=20';
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
                address: item.address,
                plant_type: item.plant_type,
                max_power: item.max_power_gen_in_watt,
                balance_authority: item.balance_authority_idc_address,
                physical_asset_authority: item.physical_asset_authority_idc_address,
                metering_authority: item.metering_authority_idc_address,
                authorized: item.authorized
            }));
            //console.log(filteredData); // Print the filtered data to the console
            return { ...data, items: filteredData }; // Return the modified data object
        });
}


// Export the function
export { fetchPlants };
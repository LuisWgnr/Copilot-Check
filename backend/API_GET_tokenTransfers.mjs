import { marketAddress } from './address.mjs';

function fetchTokenTransfers(page) {
    const apiUrl = 'https://b2e2-energyscan-webapp-privatechain-prod.azurewebsites.net/api/markets/{market_authority_idc_address}/tx/token-transfers?page=1&per_page=20';
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
                token_type: item.token_kind,
                energy: item.value,
                sender: item.token_sender_idc_address,
                reciver: item.token_receiver_idc_address,
                gen_plant: item.generation_plant_idc_address,
                transfer_type: item.transfer_type,
                begin_balance_period: item.balance_period,
                blocknumber: item.blocknumber,
                tx_hash: item.tx_hash
            }));
            //console.log(filteredData); // Print the filtered data to the console
            return { ...data, items: filteredData }; // Return the modified data object
        });
}


// Export the function
export { fetchTokenTransfers };
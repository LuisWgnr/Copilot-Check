import { fetchAuthorities } from 'backend\API_GET_authorities.mjs';

// Function to update the addresses in the HTML table
async function updateAuthoritiesAddresses() {
  // Fetch the authorities data
  const authorities = await fetchAuthorities();

  // Get all rows in the table except the header row
  const rows = document.querySelectorAll('table tr:not(:first-child)');

  // Iterate over each row in the table
  rows.forEach(row => {
    // Get the type from the second cell of the row
    const type = row.cells[1].textContent.trim().toUpperCase().replace(' ', '_') + '_AUTHORITY';

    // Find the corresponding authority object by matching the type
    const authority = authorities.find(auth => auth.authority_type === type);

    // If an authority is found, update the address in the first cell of the row
    if (authority) {
      row.cells[0].textContent = authority.address;
    }
  });
}

// Call the function to update the addresses
updateAuthoritiesAddresses();
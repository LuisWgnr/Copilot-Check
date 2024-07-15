import { fetchAuthorities } from "../API_GET_authorities.mjs";

async function getMeteringAuthorityAddress() {
	const authorities = await fetchAuthorities(); // Assuming fetchAuthorities is an async function
	const meteringAuthority = authorities.find(authority => authority.authority_type === "METERING_AUTHORITY");
	return meteringAuthority ? meteringAuthority.address : 'Address not found';
}

export { getMeteringAuthorityAddress as meteringAuthorityAddress };
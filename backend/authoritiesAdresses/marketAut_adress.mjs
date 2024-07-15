import { fetchAuthorities } from "../API_GET_authorities.mjs";

async function getMarketAuthorityAddress() {
	const authorities = await fetchAuthorities(); // Assuming fetchAuthorities is an async function
	const marketAuthority = authorities.find(authority => authority.authority_type === "MARKET_AUTHORITY");
	return marketAuthority ? marketAuthority.address : 'Address not found';
}

export { getMarketAuthorityAddress as marketAuthorityAddress };
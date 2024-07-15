import { fetchAuthorities } from "../API_GET_authorities.mjs";

async function getBalanceAuthorityAddress() {
	const authorities = await fetchAuthorities(); // Assuming fetchAuthorities is an async function
	const balanceAuthority = authorities.find(authority => authority.authority_type === "BALANCE_AUTHORITY");
	return balanceAuthority ? balanceAuthority.address : 'Address not found';
}

export { getBalanceAuthorityAddress as balanceAuthorityAddress };
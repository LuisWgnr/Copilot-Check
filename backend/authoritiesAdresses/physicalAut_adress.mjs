import { fetchAuthorities } from "../API_GET_authorities.mjs";

async function getPhysicalAssetAuthorityAddress() {
	const authorities = await fetchAuthorities(); // Assuming fetchAuthorities is an async function
	const physicalAssetAuthority = authorities.find(authority => authority.authority_type === "PHYSICAL_ASSET_AUTHORITY");
	return physicalAssetAuthority ? physicalAssetAuthority.address : 'Address not found';
}

export { getPhysicalAssetAuthorityAddress as physicalAssetAuthorityAddress };
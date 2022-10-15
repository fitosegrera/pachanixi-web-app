const blockFrostApiKey = 'mainneto2MMdNrK9zr1NS323coDEU6TiYivV0GR';

let addresses = [];

async function getAssetsFromPolicyId(policyID) {
	const response = await fetch(
		`https://cardano-mainnet.blockfrost.io/api/v0/assets/policy/${policyID}`,
		{
			headers: {
				project_id: blockFrostApiKey,
				'Content-Type': 'application/json'
			}
		}
	);
	return await response.json();
}

async function getAssetAddress(assetId) {
	const response = await fetch(
		`https://cardano-mainnet.blockfrost.io/api/v0/assets/${assetId}/addresses`,
		{
			headers: {
				project_id: blockFrostApiKey,
				'Content-Type': 'application/json'
			}
		}
	);
	return await response.json();
}

export const getAssetsAddresses = async (policyID) => {
	await getAssetsFromPolicyId(policyID).then(async (assets) => {
		Object.keys(assets).forEach((key) => {
			//console.log(key, assets[key]);
			getAssetAddress(assets[key].asset).then((asset) => {
				addresses.push(asset[0].address);
				//console.log(asset[0].address);
			});
		});
	});
	//console.log(addresses)
	return addresses;
};

export async function getAssetsInWallet(address) {
	const response = await fetch(
		`https://cardano-mainnet.blockfrost.io/api/v0/addresses/${address}`,
		{
			headers: {
				project_id: blockFrostApiKey,
				'Content-Type': 'application/json'
			}
		}
	);
	let data = await response.json();
	//console.log(data)
	return data;
}

export async function getSpecificAsset(policyAndAddress) {
	const response = await fetch(
		`https://cardano-mainnet.blockfrost.io/api/v0/assets/${policyAndAddress}`,
		{
			headers: {
				project_id: blockFrostApiKey,
				'Content-Type': 'application/json'
			}
		}
	);
	let data = await response.json();
	//console.log(data)
	return data;
}

export async function getAssociatedAddresses(stakeAddress) {
	const response = await fetch(
		`https://cardano-mainnet.blockfrost.io/api/v0/accounts/${stakeAddress}/addresses`,
		{
			headers: {
				project_id: blockFrostApiKey,
				'Content-Type': 'application/json'
			}
		}
	);
	let data = await response.json();
	//console.log(data);
	return data;
}

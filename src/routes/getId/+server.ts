import { STEAM_KEY } from '$env/static/private';

export async function POST({ request }) {
	const input = await request.json();
	//console.log('Steam64 id from inputfield');
	//console.log(input.userId);

    let id = await get64Id(input.searchParam)

	return new Response(JSON.stringify({ body: id }));
}

async function get64Id(name: string){

	console.log(name);

    const url = `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${STEAM_KEY}&vanityurl=${name}`;
	const response = await fetch(url);
	const res = await response.json();

    console.log("RESULT FROM get64Id FETCH")
	console.log(res)

	return res
}
import { STEAM_KEY } from '$env/static/private';

export async function POST({ request }) {
	const input = await request.json();
	//console.log('Steam64 id from inputfield');
	//console.log(input.userId);

	let profileInfo = {
		name: '',
		img: '',
		ownedGames: [],
		customUrl: ''
	};

	const user = await fetchSteamUser(input.userId);
	const games = await fetchOwnedGames(input.userId);
	//console.log('GAMES');
	//console.log(games);
	profileInfo.name = user[0].personaname;
	profileInfo.img = user[0].avatarfull;
	profileInfo.customUrl = user[0].profileurl
	profileInfo.ownedGames = games;
	return new Response(JSON.stringify({ body: profileInfo }));
}

async function fetchSteamUser(id: String) {
	const url = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${STEAM_KEY}&steamids=${id}`;
	const response = await fetch(url);
	const res = await response.json();
	//console.log("RESULT FROM USER FETCH")
	//console.log(res.response.players)

	return res.response.players;
}

async function fetchOwnedGames(id: String) {
	const url = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${STEAM_KEY}&steamid=${id}&format=json&include_appinfo=true`;
	const response = await fetch(url);
	const res = await response.json();
	console.log("RESULT FROM OWNED GAMES FETCH")
	console.log(res.response.games)

	if(res.response.games === undefined){
		return []
	}
	
	return res.response.games;
}

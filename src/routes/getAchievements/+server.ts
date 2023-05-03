import { STEAM_KEY } from '$env/static/private';

export async function POST({ request }) {
	const input = await request.json();
	console.log('Steam64 id from Achievements');
	console.log(input.userId);
	console.log(input.appId);

	const achiev = await fetchAchievements(input.userId, input.appId);
	console.log('ACHIEVEMENTS');
	console.log(achiev);
	
	return new Response(JSON.stringify({ body: achiev }));
}

// TODO: Implementera error handeling för om profilen är private får man inga achievements.
async function fetchAchievements(id: String, game: String) {
	const url = `https://steamcommunity.com/stats/${game}/achievements`;
	const response = await fetch(url);
	const res = await response.text();
	console.log("RESULT FROM ACHIEVEMENTS FETCH")
	console.log(res)

	return res;
}

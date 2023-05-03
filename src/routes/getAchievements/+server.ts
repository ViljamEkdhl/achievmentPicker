import { JSDOM } from 'jsdom'

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
	//console.log("RESULT FROM ACHIEVEMENTS FETCH")
	//console.log(res)

	let test = parseString(res);

	return res;
}

function parseString(input: string) {
	const dom = new JSDOM(input);
	const parser = new dom.window.DOMParser();
	const doc = parser.parseFromString(input, 'text/html');

	const achievementDivs = doc.querySelectorAll('#mainContents .achieveRow');

	const achievements: { title: string, description: string }[] = [];
	achievementDivs.forEach((div) => {
		const title = div.querySelector('.achieveTxt h3')?.textContent?.trim() || '';
		const description = div.querySelector('.achieveTxt h5')?.textContent?.trim() || '';
		achievements.push({ title, description });
	});

	console.log("ACHIEVEMENT NAMES")
	console.log(achievements)
	return achievements;
}

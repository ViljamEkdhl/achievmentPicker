import type { RequestHandler } from '@sveltejs/kit';
import { STEAM_KEY } from "$env/static/private";


export async function POST( { request }) {
    const input = await request.json();
    console.log("Steam64 id from inputfield");
    console.log(input.userId);

    if(input.type == "steamID64"){
        const user = await fetchSteamUser(input.userId);
        return new Response(JSON.stringify({ body: user }))
    }

    return new Response(JSON.stringify({ body: input }));
} 

async function fetchSteamUser(id: String){
    const url = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${STEAM_KEY}&steamids=${id}`;
    const response = await fetch(url)
    const res = await response.json();
    //console.log("RESULT FROM STEAM FETCH")
    //console.log(res.response.players)
    return (res.response.players)
}

async function fetchOwnedGames(){

}

async function fetchAchievements(){
    
}
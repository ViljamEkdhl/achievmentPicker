import type { RequestHandler } from '@sveltejs/kit';
import { STEAM_KEY } from "$env/static/private";

export async function POST(request: Request) {
    const userId  = request.body;
    console.log("-------------------------------------INPUT----------------------------------------");
    console.log('User ID:', userId);

    return new Response(JSON.stringify({ body: userId }));
} 

function fetchSteamUser(){

}
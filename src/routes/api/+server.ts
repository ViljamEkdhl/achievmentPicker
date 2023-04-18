import type { RequestHandler, EndpointOutput, Request  } from '@sveltejs/kit';
import { STEAM_KEY } from "$env/static/private";

export async function POST(request: Request): Promise<EndpointOutput> {
    const { userId } = request.body as { userId: string };
    console.log("-------------------------------------INPUT----------------------------------------");
    console.log('User ID:', userId);

    return new Response(JSON.stringify({ body: userId }));
} 

function fetchSteamUser(){

}
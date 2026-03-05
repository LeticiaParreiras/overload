import { client } from "../sanity/client";
import { Music } from "../interface/music";

export async function getMusics(){
    const musicQuery = `*[_type == "music"]|order(_updatedAt desc)[0...3]
    {_id,
    name,
    spotify,
    youtube,
    appleMusic,
    "imageUrl": musicCover.asset}`
    const musics = await client.fetch<Music[]>(musicQuery,{})
    return musics
}
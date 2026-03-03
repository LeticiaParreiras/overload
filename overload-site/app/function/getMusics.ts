import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "../sanity/client";

export async function getMusics(){
    const musicQuery = `*[_type == "music"]|order(_updatedAt desc)[0...3]
    {_id,
    name,
    spotify,
    youtube,
    appleMusic,
    "imageUrl": musicCover.asset}`
    const musics = await client.fetch<SanityDocument[]>(musicQuery,{})
    return musics
}
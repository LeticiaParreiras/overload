import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "../sanity/client";

export async function getShows(){
    const showsQuery = `*[_type == "show"]|order(date desc){_id,local,date,buyLink}`
    const shows = await client.fetch<SanityDocument[]>(showsQuery,{})
    return shows
}
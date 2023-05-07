// get all posts

import db from "$lib/database";
import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
  const order = url.searchParams.get("order") ?? "asc";
  const limit = Number(url.searchParams.get("limit") ?? 30);
  const posts = await db.Post.findMany({
    orderBy: {
      id: order,
    },
    take: limit,
  });

  return json(posts);
}

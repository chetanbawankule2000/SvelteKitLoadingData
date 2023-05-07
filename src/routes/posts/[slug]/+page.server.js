import db from "$lib/database";
import { error } from "@sveltejs/kit";

export const load = async ({ params, parent }) => {
  const parentData = await parent();
  console.log("parentdata", parentData);
  const post = await db.Post.findUnique({
    where: { slug: params.slug },
  });

  if (!post) {
    throw error(404, "Post not found");
  }

  return { post };
};

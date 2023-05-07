import db from "$lib/database";

export const load = async () => {
  const posts = await db.Post.findMany({
    select: {
      title: true,
      slug: true,
    },
    take: 4,
  });

  return { posts };
};

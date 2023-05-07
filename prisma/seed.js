import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

// type Post ={
//     title:String
//     body:String
// }

async function getPost() {
  const response = await fetch("https://dummyjson.com/posts");
  const { posts } = await response.json();
  return posts;
}

function slugify(text) {
  return text
    .replace(/\s/g, "-")
    .replace(/[^a-zA-A0-9-]/g, "")
    .toLowerCase();
}

async function main() {
  const posts = await getPost();

  for (const post of posts) {
    await db.Post.create({
      data: {
        title: post.title,
        content: post.body,
        slug: slugify(post.title),
      },
    });
  }
}
main();

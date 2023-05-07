export const load = async ({ fetch, depends }) => {
  const random = Math.round(Math.random() * 30);
  const response = await fetch(`api/posts?limit=${random}`);
  const posts = await response.json();

  depends("posts");

  return { posts };
};

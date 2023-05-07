<script>
  import { invalidate } from "$app/navigation";

  export let data;

  $: ({ posts } = data);

  const rerunLoadFunction = () => {
    invalidate("posts");

    // invalidate('api/posts')

    // invalidate(url => url.href.includes('posts'))
  };
</script>

<h1>Posts</h1>

<button on:click={rerunLoadFunction}>Rerun</button>
<p>Showing {posts.length}</p>

{#each posts as post}
  <ul>
    <li>
      <a href="/posts/{post.slug}">{post.slug}</a>
    </li>
  </ul>
{/each}

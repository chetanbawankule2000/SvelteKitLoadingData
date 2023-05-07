<script>
  export let data;

  function fromatDate(date) {
    return new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(date);
  }
</script>

<hgroup>
  <h1>
    {data.post.title}
  </h1>
  <h2>{fromatDate(data.post.createdAt)}</h2>
</hgroup>

<div class="content">
  {@html data.post.content}
</div>

<div class="posts">
  <h3>Posts</h3>
  <ul>
    {#each data.posts as { slug, title }}
      <li>
        <a href="/posts/{slug}">{title}</a>
      </li>
    {/each}
  </ul>
</div>

<style>
  .posts {
    margin-top: 2rem;
  }
</style>

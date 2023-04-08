<script>
  /** @type {import('./$types').PageData} */
  export let data;

  console.log(data.blogs);
</script>

<main>
  <h1>Blog</h1>
  {#if data.blogs.length}
    <ul>
      {#each data.blogs as post}
        <li>
          <h2>{post.attributes.title}</h2>
          <p>{post.attributes.created}</p>
          <p>{post.attributes.body}</p>
          <p>{post.attributes.slug}</p>
        </li>
      {/each}
    </ul>
  {:else}
    <p>No posts yet.</p>
  {/if}
</main>

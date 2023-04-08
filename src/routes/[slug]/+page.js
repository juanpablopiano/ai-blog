export async function load({ params }) {
  const response = await fetch(
    `https://hospitality-seal-queue-heath.trycloudflare.com/api/slugify/slugs/blog/${params.slug}`
  );
  const { data: { attributes } } = await response.json();
  return {
    post: attributes,
  };
}

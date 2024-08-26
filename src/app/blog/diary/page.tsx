import { getAllPosts } from "@/lib/api";
import Container from "@/app/_components/container";
import { Post } from "@/interfaces/post";

export default async function Page() {
  const allPosts: Post[] = await getAllPosts();

  return (
    <main className="py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPosts.map((post) => (
            <div key={post.slug} className="p-4 border rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.excerpt}</p>
              <a href={`/blog-app/blog/posts/${post.slug}`} className="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}

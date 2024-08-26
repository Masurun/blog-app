import { getAllPosts } from "@/lib/api";
import Container from "@/app/_components/container";
import { Post } from "@/interfaces/post";
import { PostPreview } from "@/app/_components/post-preview";

export default async function Page() {
  const allPosts: Post[] = await getAllPosts();

  return (
    <main className="py-16">
      <Container>
        <section>
          <h2 className="mb-16 font-bold text-center text-4xl lg:text-5xl">
            Tech
          </h2>

          {/* Assuming there's no loading state for static generation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-16">
            {allPosts.map((post) => (
              <PostPreview
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                slug={post.slug}
              />
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}

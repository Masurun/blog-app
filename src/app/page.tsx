import Container from "@/app/_components/container";
import HeroArea from "@/app/_components/hero-area";
import { MoreStories } from "@/app/_components/more-stories";
import { getLatestPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getLatestPosts();
  return (
    <main>
      <HeroArea />
      <Container bgColor="bg-gray-100">
        {allPosts.length > 0 && (
          <MoreStories
            posts={allPosts}
            title="Diary"
            link="/blog-app/blog/diary/1"
          />
        )}
        </Container>
        <Container>
        {allPosts.length > 0 && (
          <MoreStories
            posts={allPosts}
            title="Tech"
            link="/blog-app/blog/tech/1"
          />
        )}
        </Container>
    </main>
  );
}

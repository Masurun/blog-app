import Container from "@/app/_components/container";
import  HeroArea  from "@/app/_components/hero-area";
import { MoreStories } from "@/app/_components/more-stories";
import { getLatestPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getLatestPosts();
  return (
    <main>
      <HeroArea />
      <Container>
        {allPosts.length > 0 && <MoreStories posts={allPosts} />}
      </Container>
    </main>
  );
}

import Container from "@/app/_components/container";
import HeroArea from "@/app/_components/hero-area";
import { MoreStories } from "@/app/_components/more-stories";
import { getLatestPosts } from "@/lib/api";
import SplashScreen from "@/app/_components/splash-screen";


export default function Index() {
  const allPosts = getLatestPosts();
  return (
    <main>
      <SplashScreen />
      <HeroArea />
      <Container bgColor="bg-gray-100">
        {allPosts.length > 0 && (
          <MoreStories
            posts={allPosts}
            title="Works"
            link="/blog-app/blog/works/1"
          />
        )}
        </Container>
      <Container>
        {allPosts.length > 0 && (
          <MoreStories
            posts={allPosts}
            title="Life"
            link="/blog-app/blog/life/1"
          />
        )}
        </Container>
        <Container bgColor="bg-gray-100">
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

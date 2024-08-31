import Container from "@/app/_components/container";
import HeroArea from "@/app/_components/hero-area";
import { MoreStories } from "@/app/_components/more-stories";
import { getLatestPosts } from "@/lib/api";
import SplashScreen from "@/app/_components/splash-screen";
import AnimatedContainers from "@/app/_components/animated-containers";

export default function Index() {
  const allPosts = getLatestPosts();

  return (
    <main>
      <SplashScreen />
      <HeroArea />
      <Container bgColor="bg-gray-100">
        <AnimatedContainers>
          {allPosts.length > 0 && (
            <MoreStories
              posts={allPosts}
              title="Works"
              link="/blog-app/blog/works/1"
            />
          )}
        </AnimatedContainers>
      </Container>
      <Container>
        <AnimatedContainers>
          {allPosts.length > 0 && (
            <MoreStories
              posts={allPosts}
              title="Life"
              link="/blog-app/blog/life/1"
            />
          )}
        </AnimatedContainers>
      </Container>
      <Container bgColor="bg-gray-100">
        <AnimatedContainers>
          {allPosts.length > 0 && (
            <MoreStories
              posts={allPosts}
              title="Tech"
              link="/blog-app/blog/tech/1"
            />
          )}
        </AnimatedContainers>
      </Container>
    </main>
  );
}

import Container from "@/app/_components/container";
import HeroArea from "@/app/_components/hero-area";
import { MoreStories } from "@/app/_components/more-stories";
import { getLatestPosts } from "@/lib/api";
import SplashScreen from "@/app/_components/splash-screen";
import AnimatedContainers from "@/app/_components/animated-containers";

export default function Index() {
  const latestWorksPosts = getLatestPosts("works");
  const latestLifePosts = getLatestPosts("life");
  const latestTechPosts = getLatestPosts("tech");

  return (
    <main>
      <SplashScreen />
      <HeroArea />
      <Container bgColor="bg-gray-100">
        <AnimatedContainers>
          {latestWorksPosts.length > 0 && (
            <MoreStories
              posts={latestWorksPosts}
              title="Works"
              link="/blog-app/blog/works/1"
              category="works"
            />
          )}
        </AnimatedContainers>
      </Container>
      <Container>
        <AnimatedContainers>
          {latestLifePosts.length > 0 && (
            <MoreStories
              posts={latestLifePosts}
              title="Life"
              link="/blog-app/blog/life/1"
              category="life"
            />
          )}
        </AnimatedContainers>
      </Container>
      <Container bgColor="bg-gray-100">
        <AnimatedContainers>
          {latestTechPosts.length > 0 && (
            <MoreStories
              posts={latestTechPosts}
              title="Tech"
              link="/blog-app/blog/tech/1"
              category="tech"
            />
          )}
        </AnimatedContainers>
      </Container>
    </main>
  );
}

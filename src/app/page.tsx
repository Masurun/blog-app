import Container from "@/app/_components/container";
import HeroArea from "@/app/_components/hero-area";
import { MoreStories } from "@/app/_components/more-stories";
import { getLatestPosts } from "@/lib/api";
import SplashScreen from "@/app/_components/splash-screen";
import AnimatedContainers from "@/app/_components/animated-containers";

export default function Index() {
  const latestToeicPosts = getLatestPosts("toeic");
  const latestEikenPosts = getLatestPosts("eiken");
  const latestDiaryPosts = getLatestPosts("diary");

  return (
    <main>
      {/* <SplashScreen /> */}
      <HeroArea />
      <Container bgColor="bg-gray-100">
        <AnimatedContainers>
          {latestDiaryPosts.length > 0 && (
            <MoreStories
              posts={latestDiaryPosts}
              title="日記"
              link="/blog-app/blog/diary/1"
              category="diary"
            />
          )}
        </AnimatedContainers>
      </Container>
      <Container>
        <AnimatedContainers>
          {latestEikenPosts.length > 0 && (
            <MoreStories
              posts={latestEikenPosts}
              title="英検"
              link="/blog-app/blog/eiken/1"
              category="eiken"
            />
          )}
        </AnimatedContainers>
      </Container>
      <Container bgColor="bg-gray-100">
        <AnimatedContainers>
          {latestToeicPosts.length > 0 && (
            <MoreStories
              posts={latestToeicPosts}
              title="TOEIC"
              link="/blog-app/blog/toeic/1"
              category="toeic"
            />
          )}
        </AnimatedContainers>
      </Container>
    </main>
  );
}

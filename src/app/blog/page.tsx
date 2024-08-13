import Container from "@/app/_components/container";
import { AllStories } from "@/app/_components/all-stories";
import { getAllPosts } from "@/lib/api";

export default function Page() {
  const allPosts = getAllPosts();
  return (
    <main className="mt-32">
      <Container>
        {/* {allPosts.length > 0 && <AllStories posts={allPosts} />} */}
        <AllStories />
      </Container>
    </main>
  );
}



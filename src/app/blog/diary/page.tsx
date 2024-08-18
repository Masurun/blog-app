import Container from "@/app/_components/container";
import { AllStories } from "@/app/_components/all-stories";
import { getAllPosts } from "@/lib/api";


export default function Page() {
  const allPosts = getAllPosts();
  return (
    <main className="py-16">
      <Container>
        <AllStories title="Diary" link="/blog/diary" />
      </Container>
    </main>
  );
}



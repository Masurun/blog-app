import { getAllPosts } from "@/lib/api";
import Container from "@/app/_components/container";
import { AllStories } from "@/app/_components/all-stories";

export default async function Page() {
  const allPosts = await getAllPosts();
  const totalPages = Math.ceil(allPosts.length / 9);

  return (
    <main className="py-16">
      <Container>
      </Container>
    </main>
  );
}

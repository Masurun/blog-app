import Container from "@/app/_components/container";
import { AllStories } from "@/app/_components/all-stories";
import { getAllPosts } from "@/lib/api";

type Props = {
  posts: Post[];
  totalPages: number;
};

export default function Page({ posts, totalPages }: Props) {
  return (
    <main className="py-16">
      <Container>
        <AllStories
          title="All Stories"
          link="/all-stories"
          initialPosts={posts}
          totalPages={totalPages}
        />
      </Container>
    </main>
  );
}
export async function getStaticProps() {
  // APIからデータを取得
  const allPosts = getAllPosts();
  const totalPages = Math.ceil(allPosts.length / 9);

  return {
    props: {
      posts: allPosts.slice(0, 9), // 最初のページの投稿だけを取得
      totalPages,
    },
  };
}

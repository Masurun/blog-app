import { getAllPosts } from "@/lib/api";
import Container from "@/app/_components/container";
import { AllStories } from "@/app/_components/all-stories";
import { Post } from "@/interfaces/post";

type PageProps = {
  params: {
    page: string;
  };
};

const POSTS_PER_PAGE = 9;

export default async function Page({ params }: PageProps) {
  const allPosts: Post[] = await getAllPosts();
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const currentPage = parseInt(params.page) || 1;
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const selectedPosts = allPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <main className="py-16">
      <Container>
        <AllStories
          title="All Stories"
          link="/all-stories"
          initialPosts={selectedPosts}
          totalPages={totalPages}
        />
      </Container>
    </main>
  );
}

// すべてのページの静的パスを生成
export async function generateStaticParams() {
  const allPosts = await getAllPosts();
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  // 1ページからtotalPagesまでのパスを生成
  return Array.from({ length: totalPages }, (_, index) => ({
    page: (index + 1).toString(),
  }));
}

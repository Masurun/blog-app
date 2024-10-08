
import { getAllPosts } from "@/lib/api";
import Container from "@/app/_components/container";
import { Post } from "@/interfaces/post";
import { PostPreview } from "@/app/_components/post-preview";
import Pagination from "@/app/_components/pagination";
import AnimatedContainers from "@/app/_components/animated-containers";


const POSTS_PER_PAGE = 9; // 1ページあたりの投稿数を設定
const DIR = "toeic";

export async function generateStaticParams() {
  const allPosts: Post[] = await getAllPosts(DIR);
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  const paths = [];
  for (let i = 1; i <= totalPages; i++) {
    paths.push({ page: i.toString() });
  }

  return paths;
}

export default async function Page({ params }: { params: { page: string } }) {
  const page = parseInt(params.page, 10) || 1;
  const allPosts: Post[] = await getAllPosts(DIR);
  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const selectedPosts = allPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  const category = "toeic";
  return (
    <main className="py-16">
      <Container>
      <AnimatedContainers>
        <section>
          <h2 className="mb-16 font-bold text-center text-4xl lg:text-5xl">
            TOEIC
          </h2>

          {/* 投稿の一覧表示 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-16">
            {selectedPosts.map((post) => (
              <PostPreview
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                slug={DIR + "/" + post.slug}
              />
            ))}
          </div>
          <Pagination currentPage={page} totalPages={Math.ceil(allPosts.length / POSTS_PER_PAGE)} category={category} />
        </section>
        </AnimatedContainers>
      </Container>
    </main>
  );
}


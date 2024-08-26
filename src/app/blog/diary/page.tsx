import { getAllPosts } from "@/lib/api";
import Container from "@/app/_components/container";
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedPosts.map((post) => (
            <div key={post.slug} className="p-4 border rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.excerpt}</p>
              <a href={`/posts/${post.slug}`} className="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-4 mt-8">
          {currentPage > 1 && (
            <a
              href={`/diary/${currentPage - 1}`}
              className="px-4 py-2 bg-gray-800 text-white rounded"
            >
              ← Previous
            </a>
          )}
          {currentPage < totalPages && (
            <a
              href={`/diary/${currentPage + 1}`}
              className="px-4 py-2 bg-gray-800 text-white rounded"
            >
              Next →
            </a>
          )}
        </div>
      </Container>
    </main>
  );
}

// すべてのページの静的パスを生成
export async function generateStaticParams() {
  const allPosts = await getAllPosts();
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  return Array.from({ length: totalPages }, (_, index) => ({
    page: (index + 1).toString(),
  })).map((params) => ({
    page: params.page, // パスの一部としてページ番号を使用
  }));
}

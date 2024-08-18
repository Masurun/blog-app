"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  title: string;
  link: string;
};

export function AllStories({ title, link }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const [posts, setPosts] = useState<Post[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true); // ローディング状態の管理

  const fetchPosts = async (page: number) => {
    setLoading(true); // データ取得開始時にローディングを開始
    try {
      const res = await fetch(`/api/posts?page=${page}&limit=9`);
      if (res.ok) {
        const { posts: newPosts, totalPages: total } = await res.json();
        setPosts(newPosts);
        setTotalPages(total);
        setHasMore(page < total);
      } else {
        console.error("Failed to fetch posts");
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false); // データ取得完了時にローディングを停止
    }
  };

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) {
      router.push(`${link}?page=${page + 1}`);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      router.push(`${link}?page=${page - 1}`);
    }
  };

  return (
    <section>
      <h2 className="mb-16 font-bold text-center text-4xl lg:text-5xl">
        {title}
      </h2>

      {loading ? (
        <div className="flex justify-center items-center h-48">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 md:gap-x-8 lg:gap-x-8 md:gap-y-16 mb-16">
          {posts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              slug={post.slug}
            />
          ))}
        </div>
      )}

      <div className="flex justify-center space-x-4 mt-8">
        <button
          onClick={handlePreviousPage}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
        >
          ← Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={page >= totalPages}
          className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
        >
          Next →
        </button>
      </div>
    </section>
  );
}

"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  title: string;
  link: string;
  initialPosts: Post[];
  totalPages: number;
};

export function AllStories({ title, link, initialPosts, totalPages }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  useEffect(() => {
    if (page > 1) {
      // 2ページ目以降のデータが必要な場合、クライアントサイドでフェッチ
      const fetchPosts = async () => {
        try {
          const res = await fetch(`/api/posts?page=${page}&limit=9`);
          if (res.ok) {
            const { posts: newPosts } = await res.json();
            setPosts(newPosts);
          } else {
            console.error("Failed to fetch posts");
          }
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      };
      fetchPosts();
    }
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

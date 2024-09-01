"use client";
import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
  title: string;
  link: string;
  category: string;
};

export function MoreStories({ posts, title, link, category}: Props) {
  return (
    <section className="py-8">
      <h2 className="mb-16 font-bold text-center text-4xl lg:text-5xl">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 mb-16">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={category + "/" + post.slug}
          />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <a
          href={link}
          className="rounded mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
        >
          View More
        </a>
      </div>
    </section>
  );
}

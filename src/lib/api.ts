import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

export function getPostSlugs(dir: string) {
  let postsDirectory = join(process.cwd(), "_posts/" + dir + "/");
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string,dir: string) {
  let postsDirectory = join(process.cwd(), "_posts/" + dir + "/");
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getLatestPosts(dir: string): Post[] {
  const slugs = getPostSlugs(dir);
  const posts = slugs
    .map((slug) => getPostBySlug(slug,dir))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    .slice(0, 2); // 最初の6件を取得

  return posts;
}

export function getAllPosts(dir: string): Post[] {
  const slugs = getPostSlugs(dir);
  const posts = slugs
    .map((slug) => getPostBySlug(slug,dir))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

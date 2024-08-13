import { NextResponse } from 'next/server';
import { getAllPosts } from '../../../lib/api'; // 正しいパスに置き換えてください

export async function GET(request: Request) {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get('page')) || 1;
  const limit = Number(url.searchParams.get('limit')) || 9; // デフォルトの1を9に修正

  const allPosts = getAllPosts();
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / limit);

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedPosts = allPosts.slice(startIndex, endIndex);

  return NextResponse.json({
    posts: paginatedPosts,
    totalPages,
    currentPage: page,
  });
}

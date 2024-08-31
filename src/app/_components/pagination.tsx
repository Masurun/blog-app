import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  category: string;
}

export default function Pagination({ currentPage, totalPages, category }: PaginationProps) {
  return (
    <nav>
      <ul className="flex justify-center space-x-4">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <li key={page}>
            {page === currentPage ? (
              <span className="px-3 py-1 text-white bg-blue-500 rounded-md">{page}</span>
            ) : (
              <Link href={`/blog/${category}/${page}`} className="px-3 py-1 text-blue-500 hover:bg-blue-100 rounded-md">
                {page}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

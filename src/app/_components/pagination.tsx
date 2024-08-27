import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  category: string;
}

export default function Pagination({ currentPage, totalPages, category }: PaginationProps) {
  return (
    <nav>
      <ul className="flex justify-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <li key={page}>
            <Link href={`/blog/${category}/${page}`}>
              <a className={`px-3 py-1 border ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}>
                {page}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

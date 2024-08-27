import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  return (
    <nav>
      <ul className="flex justify-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <li key={page}>
            <Link href={`/blog/diary/${page}`}>
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

import Link from 'next/link';

export default function Pagination({ currentPage, totalPages }) {
  return (
    <nav>
      <ul>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <li key={page}>
            <Link href={`/blog/page/${page}`}>
              <a className={page === currentPage ? 'active' : ''}>{page}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

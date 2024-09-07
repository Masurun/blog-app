import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  slug,
}: Props) {
  return (
    <div className="mb-2.5">
      <div className="mb-2.5 relative w-full aspect-video">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-s font-bold">
      <div className="text-xs mb-0.25 font-bold text-gray-500">
        <DateFormatter dateString={date} />
      </div>
      <Link href={`/posts/${slug}`} className="hover:underline">
        {title}
      </Link>
      </h3>
    </div>
  );
}

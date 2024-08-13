import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";

type Props = {
  title: string;
  coverImage: string;
  date: string;
};

export function PostHeader({ title, coverImage, date }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-xs mb-0.25 font-bold text-gray-500">
        <DateFormatter dateString={date} />
      </div>
      <PostTitle>{title}</PostTitle>
        <CoverImage title={title} src={coverImage} />
    </div>
  );
}

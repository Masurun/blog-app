import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn(
        "shadow-sm transition-transform duration-100 ease-in-out transform", // 基本のトランジションと変形効果
        {
          "hover:scale-105 hover:shadow-xl hover:saturate-150": slug, // ホバー時の効果
        }
      )}
      width={710}
      height={420}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;

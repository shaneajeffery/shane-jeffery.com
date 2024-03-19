import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/libs/utils/formatDate';

interface FrontMatter {
  title: string;
  date: Date;
  image: string;
  category: string;
}

interface Props {
  frontMatter: FrontMatter;
  slug: string;
}

const BlogCard = ({ frontMatter, slug }: Props) => {
  const { title, date, image, category } = frontMatter;

  return (
    <article className="group relative text-center">
      <div className="relative mb-8 overflow-hidden rounded-lg">
        <div className="relative z-10 h-[275px] overflow-hidden rounded-lg bg-black/20">
          <Link href={`/blog/${slug}`} className="stretched-link">
            <Image
              className="z-10 mx-auto h-[275px] w-auto rounded-lg object-cover object-center"
              src={image}
              alt={title}
              width={`820`}
              height={`275`}
            />
            <Image
              className="absolute left-0 top-0 -z-10 h-[500px] w-full scale-110 object-cover opacity-50 blur-sm filter"
              src={image}
              alt={title}
              width={`100`}
              height={`100`}
            />
          </Link>
        </div>
      </div>
      <div className="px-6 transition-all duration-500 group-hover:opacity-60">
        <div className="mb-4 flex flex-wrap items-center justify-center space-x-5">
          <span className="inline-block rounded-full bg-[#efefef] px-3 py-1 text-sm capitalize">
            {category}
          </span>
          <span className="text-sm opacity-75">{formatDate(date)}</span>
        </div>
        <h3 className="text-2xl leading-tight">
          <Link href={`/blog/${slug}`} className="stretched-link">
            {title}
          </Link>
        </h3>
      </div>
    </article>
  );
};

export default BlogCard;

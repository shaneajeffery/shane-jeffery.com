import { formatDate } from '../lib/format-date';
import { Image } from 'astro:assets';

const BlogCard = ({ frontMatter, slug }) => {
    const { title, date, image, category } = frontMatter;

    return (
        <article className="group relative text-center">
            <div className="relative mb-8 overflow-hidden rounded-lg">
                <Image
                    src={image.src}
                    alt={title}
                    width={620}
                    height={500}
                    className="bg-light/20 w-full rounded-lg object-cover duration-700 group-hover:-rotate-1 group-hover:scale-110 group-hover:brightness-75"
                />
            </div>
            <div className="px-6 transition-all duration-500 group-hover:opacity-60">
                <div className="mb-4 flex flex-wrap items-center justify-center space-x-5">
                    <span className="text-sm inline-block rounded-full bg-[#efefef] px-3 py-1 capitalize">
                        {category}
                    </span>
                    <span className="text-sm opacity-75">
                        {formatDate(date)}
                    </span>
                </div>
                <h3 className="text-2xl leading-tight">
                    <a href={`/blog/${slug}`} className="stretched-link">
                        {title}
                    </a>
                </h3>
            </div>
        </article>
    );
};

export default BlogCard;

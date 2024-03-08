import Image from 'next/image';
import Link from 'next/link';

interface Props {
  index: number;
  slug: string;
  frontMatter: Record<string, string>;
}

const WorkExperiences = ({ index, slug, frontMatter }: Props) => {
  const { title, description, image, color, category } = frontMatter;

  return (
    <div data-aos className="group relative h-full overflow-hidden rounded-lg">
      <span
        className="absolute bottom-0 left-0 z-30 h-full w-full duration-700 group-[.aos-animate]:h-0"
        style={{
          backgroundColor: color,
          transitionDelay: `${index * 100}ms`,
        }}
      ></span>
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className={`h-full w-full scale-150 bg-light/20 object-cover duration-700 group-hover:!scale-125 group-[.aos-animate]:scale-100`}
      />
      <div className="absolute inset-0 z-20 flex flex-col justify-center p-8">
        <span className="bg-overlay pointer-events-none absolute bottom-0 left-0 -z-10 h-full w-full opacity-0 duration-300 group-hover:opacity-100"></span>

        <div className="-mt-1 flex items-center justify-between opacity-0 duration-300 group-hover:mt-0 group-hover:opacity-100 group-hover:delay-300">
          <span className="rounded-full bg-white/25 px-3 py-1 text-sm font-light uppercase tracking-wider text-white backdrop-blur-lg">
            {category}
          </span>
          <Link href={`/project/${slug}`} className="stretched-link">
            <Image
              className="inline-block rotate-[135deg]"
              src="/images/arrow-right.svg"
              alt="arrow"
              height={22}
              width={25}
            />
          </Link>
        </div>
        <div className="mt-auto text-center">
          <h3 className="relative mb-2 overflow-hidden font-secondary text-4xl font-semibold text-white">
            <span className="block translate-y-full duration-300 group-hover:translate-y-0">
              {title}
            </span>
          </h3>
          <p className="relative overflow-hidden font-light text-white">
            <span className="block translate-y-full duration-300 group-hover:translate-y-0 group-hover:delay-150">
              {description}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkExperiences;

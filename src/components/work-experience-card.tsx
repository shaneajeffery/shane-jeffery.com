import Image from 'next/image';
import Link from 'next/link';

interface Props {
  slug: string;
  frontMatter: Record<string, string>;
  onListingPage?: boolean;
}

const WorkExperiences = ({ slug, frontMatter, onListingPage }: Props) => {
  const { title, image } = frontMatter;

  return (
    <div data-aos className="group relative overflow-hidden rounded-lg">
      <div className="flex justify-center">
        <Link href={`/work-experience/${slug}`}>
          <Image
            src={image}
            alt={title}
            width={onListingPage ? 500 : 200}
            height={onListingPage ? 500 : 200}
            className={`bg-light/20 duration-700`}
          />
        </Link>
      </div>
    </div>
  );
};

export default WorkExperiences;

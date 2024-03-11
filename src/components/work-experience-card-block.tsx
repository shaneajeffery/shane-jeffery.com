import { cn } from '@/utils/cn';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export const WorkExperienceCardBlock = ({
  items,
  className,
}: {
  items: any;
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn('grid grid-cols-3 lg:grid-cols-6', className)}>
      {items.map((item: any, idx: number) => (
        <Link
          href={`/work-experience/${item.slug}`}
          key={item?.link}
          className="group relative block h-full w-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-slate-300"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card
            title={item.frontMatter.title}
            image={item.frontMatter.image}
          ></Card>
        </Link>
      ))}
    </div>
  );
};

const Card = ({
  className,
  image,
  title,
}: {
  className?: string;
  image: any;
  title: string;
}) => {
  return (
    <div
      className={cn(
        'relative z-20 h-full w-full overflow-hidden rounded-2xl border  border-slate-700  bg-white dark:border-white/[0.2]',
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">
          <Image src={image} alt={title} width={200} height={200} />
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceCardBlock;

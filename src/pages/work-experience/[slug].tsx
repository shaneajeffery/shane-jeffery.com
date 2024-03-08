import Layout from '@/components/layout';
import Markdown from '@/components/react-markdown';
import { getDirectoryPages } from '@/libs/getDirectoryPages';

import ProjectCard from '@/components/work-experience-card';
import Image from 'next/image';

const WorkExperiencePage = ({
  nextWorkExperience,
  currentWorkExperience: { frontMatter, content },
}) => {
  // Current Project frontMatter
  const { title, image, description, category, projectInfo } = frontMatter;

  return (
    <Layout metaTitle={title} metaDescription={description} ogImage={image}>
      <section className="pb-28 pt-24">
        <div className="container">
          <div className="banner row justify-center">
            <div className="md:col-7 lg:col-6" data-aos="fade-up-sm">
              <span className="mb-6 inline-block rounded-full bg-[#efefef] px-3 py-1 text-sm capitalize text-black">
                {category}
              </span>

              <h1 className="mb-4 text-4xl !leading-tight md:text-5xl">
                {title}
              </h1>
              <p>{description}</p>

              <ul className="row mt-4 text-white">
                {projectInfo.map((item, index) => (
                  <li key={index} className="col-6 mt-8">
                    <p className="mb-2 text-xs uppercase tracking-wider text-white/50">
                      {item.title}
                    </p>
                    <div className="[&_a]:underline [&_a]:hover:no-underline [&_li]:mt-1">
                      <Markdown content={item.data} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="mt-12 md:col-5 lg:col-4 md:mt-0"
              data-aos="fade-up-sm"
              data-aos-delay="100"
            >
              <Image
                className="aspect-square w-full rounded-lg bg-light/20 object-cover object-center md:w-[500px]"
                src={image}
                alt={title}
                width={`500`}
                height={`500`}
              />
            </div>

            <div className="lg:col-10">
              <hr className="mb-24 mt-28 opacity-5" />
            </div>
          </div>

          <div className="row justify-center" data-aos="fade-in">
            <div className="lg:col-10">
              <article className="content content-light [&_img]:w-full">
                <Markdown content={content} />
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-b-2xl bg-white py-28 text-dark">
        <div className="container">
          <div className="mb-16">
            <h2 className="-mt-[6px] text-center font-secondary text-4xl font-medium md:text-5xl">
              Next Work Experience
            </h2>
          </div>
          <div className="row justify-center">
            <div className="lg:col-6">
              {nextWorkExperience && (
                <ProjectCard
                  index={0}
                  slug={nextWorkExperience.slug}
                  frontMatter={nextWorkExperience.frontMatter}
                  twoColumns={true}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WorkExperiencePage;

export const getStaticPaths = async () => {
  const allWorkExperiences = getDirectoryPages('./src/content/work-experience');
  const paths = allWorkExperiences.map((we) => ({
    params: {
      slug: we.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const allWorkExperiences = getDirectoryPages('./src/content/work-experience');

  const currentIndex = allWorkExperiences.findIndex(
    (item) => item.slug == slug
  );
  const currentWorkExperience = allWorkExperiences[currentIndex];
  const nextWorkExperience =
    allWorkExperiences[currentIndex + 1] || allWorkExperiences[0];

  return {
    props: {
      currentWorkExperience: currentWorkExperience,
      nextWorkExperience: nextWorkExperience,
    },
  };
};

import Layout from '@/components/layout';
import Markdown from '@/components/react-markdown';
import { getDirectoryPages } from '@/libs/getDirectoryPages';
import WorkExperienceCardBlock from '@/components/work-experience-card-block';
import Image from 'next/image';

const WorkExperiencePage = ({
  // @ts-ignore
  currentWorkExperience: { frontMatter, content },
  // @ts-ignore
  allWorkExperiences,
}) => {
  const { title, image, category, projectInfo } = frontMatter;

  return (
    <Layout metaTitle={title}>
      <section className="pb-28 pt-24">
        <div className="container">
          <div className="banner row justify-center">
            <div className="md:col-7 lg:col-6" data-aos="fade-up-sm">
              <span className="mb-6 inline-block rounded-full bg-[#efefef] px-3 py-1 text-sm capitalize text-black">
                {category}
              </span>

              <h1 className="mb-0 text-4xl !leading-tight md:text-5xl">
                {title}
              </h1>

              <ul className="row  text-white">
                {/* @ts-ignore */}
                {projectInfo.map((item, index) => (
                  <li key={index} className="col-12 mt-8">
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
                className="aspect-square w-full rounded-lg bg-light/20 object-cover object-center md:w-[200px]"
                src={image}
                alt={title}
                width={`200`}
                height={`200`}
              />
            </div>

            <div className="lg:col-10">
              <hr className="mb-10 mt-10 opacity-5" />
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
              Work Experiences
            </h2>
          </div>
          <div className="row justify-center">
            <div className="w-full">
              {allWorkExperiences && (
                <WorkExperienceCardBlock items={allWorkExperiences} />
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
  // @ts-ignore
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

// @ts-ignore
export const getStaticProps = async ({ params: { slug } }) => {
  // @ts-ignore
  const allWorkExperiences = getDirectoryPages('./src/content/work-experience');

  const currentIndex = allWorkExperiences.findIndex(
    (item) => item.slug == slug
  );

  const currentWorkExperience = allWorkExperiences[currentIndex];

  return {
    props: {
      currentWorkExperience: currentWorkExperience,
      allWorkExperiences: allWorkExperiences,
    },
  };
};

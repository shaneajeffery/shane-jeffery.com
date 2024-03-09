import Layout from '@/components/layout';
import { getDirectoryPages } from '@/libs/getDirectoryPages';
import { getSinglePage } from '@/libs/getSinglePage';
import Link from 'next/link';

import Banner from '@/components/banner';
import BlogCard from '@/components/blog-card';
import WorkExperienceCard from '@/components/work-experience-card';

const Home = ({
  // @ts-ignore
  homepage,
  // @ts-ignore
  workExperiencePage,
  // @ts-ignore
  workExperiences,
  // @ts-ignore
  blogPage,
  // @ts-ignore
  blogPosts,
}) => {
  const { banner } = homepage.frontMatter;

  return (
    <Layout className="overflow-hidden">
      <Banner banner={banner} />

      <section className="py-28">
        <div className="container">
          <div className="row mb-16 items-end">
            <div className="order-2 sm:col-8 sm:order-1">
              <h2 className="-mt-[6px] text-center font-secondary text-4xl font-medium sm:text-left md:text-5xl">
                {workExperiencePage.frontMatter.title}
              </h2>
            </div>
            <div className="order-1 mb-4 block text-center sm:col-4 sm:order-2 sm:mb-0 sm:text-right">
              <span className="font-secondary text-2xl leading-none text-white/75">
                {workExperiencePage.frontMatter.subtitle}
              </span>
            </div>
          </div>

          <div className="row gy-4 md:gx-4">
            {/* @ts-ignore */}
            {workExperiences.map((we) => (
              <div key={we.slug} className={`${'sm:col-2'}`}>
                <WorkExperienceCard
                  slug={we.slug}
                  frontMatter={we.frontMatter}
                  onListingPage={true}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-b-2xl bg-white py-28 text-dark">
        <div className="container">
          <div className="row mb-16 items-end">
            <div className="order-2 sm:col-8 sm:order-1">
              <h2 className="-mt-[6px] text-center font-secondary text-4xl font-medium text-black sm:text-left md:text-5xl">
                {blogPage.frontMatter.title}
              </h2>
            </div>
            <div className="order-1 mb-4 block text-center sm:col-4 sm:order-2 sm:mb-0 sm:text-right">
              <span className="font-secondary text-2xl leading-none text-black/75">
                {blogPage.frontMatter.subtitle}
              </span>
            </div>
          </div>

          <div className="row gy-5 md:gx-4">
            {/* @ts-ignore */}
            {blogPosts.map((item, index) => (
              <div
                key={item.slug}
                className="init-delay sm:col-3"
                data-aos="fade-up-sm"
                data-aos-duration="500"
                style={{
                  // @ts-ignore
                  '--lg-delay': `${(index % 3) * 75}ms`,
                  '--md-delay': `${(index % 2) * 75}ms`,
                  '--sm-delay': `${(index % 2) * 75}ms`,
                }}
              >
                <BlogCard slug={item.slug} frontMatter={item.frontMatter} />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link className="button button-dark" href="/blog">
              <span>All Posts</span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Home;

export const getStaticProps = () => {
  const homepage = getSinglePage('./src/content/_index.md');
  const workExperiencePage = getSinglePage(
    './src/content/work-experience/_index.md'
  );
  const workExperiences = getDirectoryPages('./src/content/work-experience', 6);
  const blogPage = getSinglePage('./src/content/blog/_index.md');
  const blogPosts = getDirectoryPages('./src/content/blog', 6);

  return {
    props: {
      homepage: homepage,
      workExperiencePage: workExperiencePage,
      workExperiences: workExperiences,
      blogPage: blogPage,
      blogPosts: blogPosts,
    },
  };
};

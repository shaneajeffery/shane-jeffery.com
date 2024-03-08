import Image from 'next/image';
import Link from 'next/link';

import Layout from '@/components/layout';
import Markdown from '@/components/react-markdown';
import SharePost from '@/components/share-post';
import siteConfig from '@/config/site.config.json';
import { getDirectoryPages } from '@/libs/getDirectoryPages';
import { formatDate } from '@/libs/utils/formatDate';

const BlogPage = ({
  previousPost,
  nextPost,
  currentPost: { slug, frontMatter, content },
}) => {
  const { title, date, image, description, category } = frontMatter;
  const pageUrl = `${siteConfig.baseURL.replace(/\/$|$/, '/')}blog/${slug}`;

  return (
    <Layout metaTitle={title} metaDescription={description}>
      <section className="pb-28 pt-24">
        <div className="container">
          <div className="row justify-center">
            <div
              className="banner mb-16 text-center lg:col-8"
              data-aos="fade-up-sm"
            >
              <div className="mb-12 flex flex-wrap items-center justify-center space-x-8">
                <span className="inline-block rounded-full bg-[#efefef] px-3 py-1 text-sm capitalize text-black">
                  {category}
                </span>
                <span className="text-sm opacity-75">{formatDate(date)}</span>
              </div>

              <h1 className="mb-4 text-4xl !leading-tight md:text-5xl">
                {title}
              </h1>
              <p className="mx-auto max-w-xl">{description}</p>
            </div>

            {image && (
              <div
                className="mx-auto lg:col-10"
                data-aos="fade-up-sm"
                data-aos-delay="100"
              >
                <div className="relative z-10 h-[460px] overflow-hidden rounded-lg bg-black/20">
                  <Image
                    className="z-10 mx-auto h-[460px] w-auto rounded-lg object-cover object-center"
                    src={image}
                    alt={title}
                    width={`1020`}
                    height={`460`}
                  />
                  <Image
                    className="absolute left-0 top-0 -z-10 h-[500px] w-full scale-110 object-cover opacity-50 blur-sm filter"
                    src={image}
                    alt={title}
                    width={`100`}
                    height={`100`}
                  />
                </div>
              </div>
            )}

            <div className="mx-auto lg:col-10 xl:col-9" data-aos="fade-in">
              <div
                className={`w-full flex-wrap sm:flex sm:flex-nowrap ${image !== null ? 'pt-20' : ''}`}
              >
                <div className="sm:order-2 sm:pl-12 xl:pl-24">
                  <article className="content content-light">
                    <Markdown content={content} />
                  </article>
                </div>

                <div className="w-full sm:order-1 sm:w-auto">
                  <div className="sticky top-8">
                    <SharePost title={title} pageUrl={pageUrl} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-b-2xl bg-white py-28 text-dark">
        <div className="container">
          <div className="mb-20">
            <h2 className="-mt-[6px] text-center font-secondary text-4xl font-medium md:text-5xl">
              Keep Reading
            </h2>
          </div>
          <div className="row gy-2 justify-center sm:gy-4">
            {previousPost && (
              <div className="md:col-10 lg:col-8 xl:col-6">
                <div className="group relative z-10 flex items-center">
                  <div className="pointer-events-none relative h-[4.5rem] w-[4.5rem] shrink-0 self-start overflow-hidden rounded sm:h-28 sm:w-28 sm:rounded-lg">
                    <Image
                      src={previousPost.frontMatter.image}
                      alt={previousPost.frontMatter.title}
                      width={300}
                      height={300}
                      className="h-full w-full rounded bg-light/20 object-cover duration-500 group-hover:-rotate-1 group-hover:scale-110 group-hover:brightness-75 sm:rounded-lg"
                    />
                  </div>
                  <div className="grow pl-4 transition-all duration-500 group-hover:opacity-60 sm:pl-7">
                    <span className="absolute right-0 top-0 -z-10 select-none text-[25vh] leading-[0.65] opacity-[0.015] sm:-right-1/4">
                      PREV
                    </span>
                    <div className="mb-4 flex flex-wrap items-center space-x-5">
                      <span className="inline-block rounded-full bg-[#efefef] px-3 py-1 text-sm capitalize">
                        {previousPost.frontMatter.category}
                      </span>
                      <span className="text-sm opacity-75">
                        {formatDate(previousPost.frontMatter.date)}
                      </span>
                    </div>
                    <h3 className="text-lg leading-snug sm:text-2xl">
                      <Link
                        href={`/blog/${previousPost.slug}`}
                        className="stretched-link"
                      >
                        {previousPost.frontMatter.title}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            )}
            <div className="lg:col-12"></div>
            {nextPost && (
              <div className="md:col-10 lg:col-8 xl:col-6">
                <div className="group relative z-10 flex items-center">
                  <div className="grow pr-4 transition-all duration-500 group-hover:opacity-60 sm:pr-7">
                    <span className="absolute left-0 top-0 -z-10 select-none text-[25vh] leading-[0.65] opacity-[0.015] sm:-left-1/4">
                      NEXT
                    </span>
                    <div className="mb-4 flex flex-wrap items-center justify-end space-x-5">
                      <span className="text-sm opacity-75">
                        {formatDate(nextPost.frontMatter.date)}
                      </span>
                      <span className="inline-block rounded-full bg-[#efefef] px-3 py-1 text-sm capitalize">
                        {nextPost.frontMatter.category}
                      </span>
                    </div>
                    <h3 className="text-right text-lg leading-snug sm:text-2xl">
                      <Link
                        href={`/blog/${nextPost.slug}`}
                        className="stretched-link"
                      >
                        {nextPost.frontMatter.title}
                      </Link>
                    </h3>
                  </div>
                  <div className="pointer-events-none relative h-[4.5rem] w-[4.5rem] shrink-0 self-start overflow-hidden rounded sm:h-28 sm:w-28 sm:rounded-lg">
                    <Image
                      src={nextPost.frontMatter.image}
                      alt={nextPost.frontMatter.title}
                      width={300}
                      height={300}
                      className="h-full w-full rounded bg-light/20 object-cover duration-500 group-hover:-rotate-1 group-hover:scale-110 group-hover:brightness-75 sm:rounded-lg"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;

export const getStaticPaths = async () => {
  const allPosts = getDirectoryPages('./src/content/blog');
  const paths = allPosts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const allPosts = getDirectoryPages('./src/content/blog');

  const currentIndex = allPosts.findIndex((post) => post.slug == slug);
  const currentPost = allPosts[currentIndex];
  const previousPost =
    allPosts[currentIndex - 1] || allPosts[allPosts.length - 1];
  const nextPost = allPosts[currentIndex + 1] || allPosts[0];

  return {
    props: {
      currentPost: currentPost,
      previousPost: previousPost,
      nextPost: nextPost,
    },
  };
};

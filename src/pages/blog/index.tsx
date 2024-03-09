import BlogCard from '@/components/blog-card';
import Layout from '@/components/layout';
import PageHeader from '@/components/page-header';
import { getDirectoryPages } from '@/libs/getDirectoryPages';
import { getSinglePage } from '@/libs/getSinglePage';
import { useState } from 'react';

// @ts-ignore
const Blog = ({ blogPage, blogPosts }) => {
  const totalPosts = blogPosts.length;
  let { title, subtitle } = blogPage.frontMatter;
  subtitle = subtitle + ` (${totalPosts})`;

  const postsToShow = 6;
  const [posts, setPosts] = useState(blogPosts.slice(0, postsToShow));
  const [loadMore, setLoadMore] = useState(true);

  const handleLoadMore = () => {
    let currentLength = posts.length;
    let postLoaded = postsToShow + currentLength;
    let isMore = currentLength < totalPosts;
    const nextResults = isMore
      ? blogPosts.slice(currentLength, currentLength + postsToShow)
      : [];
    setPosts([...posts, ...nextResults]);
    totalPosts < postLoaded && setLoadMore(false);
  };

  return (
    <Layout metaTitle={title}>
      <PageHeader title={title} subtitle={subtitle} />

      <section className="rounded-b-2xl bg-white py-28 text-dark">
        <div className="container">
          <div className="row gy-5 md:gx-4">
            {/* @ts-ignore */}
            {posts.map((item, index) => (
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

            <div className="mt-16 text-center">
              {blogPosts.length > postsToShow && loadMore ? (
                <button
                  className="button button-dark"
                  onClick={() => handleLoadMore()}
                >
                  <span>Load More</span>
                </button>
              ) : (
                <p className="text-black/25">No more posts to load</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Blog;

export const getStaticProps = () => {
  const blogPage = getSinglePage('./src/content/blog/_index.md');
  // @ts-ignore
  const blogPosts = getDirectoryPages('./src/content/blog');

  return {
    props: {
      blogPage: blogPage,
      blogPosts: blogPosts,
    },
  };
};

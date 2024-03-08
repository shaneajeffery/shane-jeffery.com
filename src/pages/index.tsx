import Layout from '@/components/Layout';
import { getDirectoryPages } from '@/libs/getDirectoryPages';
import { getSinglePage } from '@/libs/getSinglePage';
import Link from 'next/link';

import Banner from '@/blocks/Banner';
import BlogCard from '@/blocks/BlogCard';
import ProjectCard from '@/blocks/ProjectCard';
import WorkProcess from '@/blocks/WorkProcess';
import Image from 'next/image';

const Home = ({ homepage, projectPage, projects, blogPage, blogPosts }) => {
    const { banner, featuredBy, workProcess } = homepage.frontMatter;

    return (
        <Layout className="overflow-hidden">
            <Banner banner={banner} />

            {featuredBy.enable && (
                <section className="overflow-hidden pt-28 lg:pb-10">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mb-10">
                                <h2
                                    className="text-center font-secondary text-3xl font-medium"
                                    data-aos="fade"
                                >
                                    {featuredBy.title}
                                </h2>
                            </div>
                            <div className="col-12">
                                <div className="flex flex-wrap items-center justify-center">
                                    {featuredBy.brands_white.map(
                                        (item, index) => (
                                            <div
                                                key={index}
                                                className="mx-4 my-4 sm:mx-8"
                                                data-aos="fade-left"
                                                data-aos-delay={index * 50}
                                            >
                                                <Image
                                                    src={item}
                                                    alt="Brand"
                                                    width={120}
                                                    height={80}
                                                    className="h-auto w-auto sm:max-h-20"
                                                />
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <section className="py-28">
                <div className="container">
                    <div className="row mb-16 items-end">
                        <div className="order-2 sm:col-8 sm:order-1">
                            <h2 className="-mt-[6px] text-center font-secondary text-4xl font-medium sm:text-left md:text-5xl">
                                {projectPage.frontMatter.title}
                            </h2>
                        </div>
                        <div className="order-1 mb-4 block text-center sm:col-4 sm:order-2 sm:mb-0 sm:text-right">
                            <span className="font-secondary text-2xl leading-none text-white/75">
                                {projectPage.frontMatter.subtitle}
                            </span>
                        </div>
                    </div>

                    <div className="row gy-4 md:gx-4">
                        {projects.map((project, i) => (
                            <div
                                key={project.slug}
                                className={`${i % 5 >= 3 ? 'sm:col-6' : 'sm:col-6 lg:col-4'} ${i === 4 ? 'hidden lg:block' : ''}`}
                            >
                                <ProjectCard
                                    index={i}
                                    slug={project.slug}
                                    frontMatter={project.frontMatter}
                                    twoColumns={i % 5 >= 3}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link className="button" href="/project">
                            <span>All Works</span>
                        </Link>
                    </div>
                </div>
            </section>

            <WorkProcess workProcess={workProcess} />

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
                        {blogPosts.map((item, index) => (
                            <div
                                key={item.slug}
                                className="init-delay sm:col-6 lg:col-4"
                                data-aos="fade-up-sm"
                                data-aos-duration="500"
                                style={{
                                    '--lg-delay': `${(index % 3) * 75}ms`,
                                    '--md-delay': `${(index % 2) * 75}ms`,
                                    '--sm-delay': `${(index % 2) * 75}ms`,
                                }}
                            >
                                <BlogCard
                                    slug={item.slug}
                                    frontMatter={item.frontMatter}
                                />
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

// Export Props
export const getStaticProps = () => {
    const homepage = getSinglePage('./src/content/_index.md');
    const projectPage = getSinglePage('./src/content/project/_index.md');
    const projects = getDirectoryPages('./src/content/project', 5);
    const blogPage = getSinglePage('./src/content/blog/_index.md');
    const blogPosts = getDirectoryPages('./src/content/blog', 3);

    return {
        props: {
            homepage: homepage,
            projectPage: projectPage,
            projects: projects,
            blogPage: blogPage,
            blogPosts: blogPosts,
        },
    };
};

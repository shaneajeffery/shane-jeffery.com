import ProjectCard from '@/components/work-experience-card';
import Layout from '@/components/layout';
import PageHeader from '@/components/page-header';
import { getDirectoryPages } from '@/libs/getDirectoryPages';
import { getSinglePage } from '@/libs/getSinglePage';
import { useState } from 'react';

const WorkExperience = ({ workExperiencePage, allWorkExperiences }) => {
  const totalWorkExperiences = allWorkExperiences.length;
  const { title, subtitle } = workExperiencePage.frontMatter;

  const workExperiencesToShow = 6;
  const [workExperiences, setWorkExperiences] = useState(
    allWorkExperiences.slice(0, workExperiencesToShow)
  );
  const [loadMore, setLoadMore] = useState(true);

  const handleLoadMore = () => {
    const currentLength = workExperiences.length;
    const postLoaded = workExperiencesToShow + currentLength;
    const isMore = currentLength < totalWorkExperiences;
    const nextResults = isMore
      ? allWorkExperiences.slice(
          currentLength,
          currentLength + workExperiencesToShow
        )
      : [];
    setWorkExperiences([...workExperiences, ...nextResults]);
    totalWorkExperiences < postLoaded && setLoadMore(false);
  };

  return (
    <Layout metaTitle={title}>
      <PageHeader title={title} subtitle={subtitle} />

      <section className="rounded-b-2xl bg-white py-28 text-dark">
        <div className="container">
          <div className="row gy-4 md:gx-4">
            {workExperiences.map((we) => (
              <div key={we.slug} className="sm:col-6 lg:col-4">
                <ProjectCard slug={we.slug} frontMatter={we.frontMatter} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default WorkExperience;

// Export Props
export const getStaticProps = () => {
  const workExperiencePage = getSinglePage(
    './src/content/work-experience/_index.md'
  );
  const allWorkExperiences = getDirectoryPages('./src/content/work-experience');

  return {
    props: {
      workExperiencePage: workExperiencePage,
      allWorkExperiences: allWorkExperiences,
    },
  };
};

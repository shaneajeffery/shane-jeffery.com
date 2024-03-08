import { useState } from 'react';

import WorkExperienceCard from '@/components/work-experience-card';
import Layout from '@/components/layout';
import PageHeader from '@/components/page-header';
import { getDirectoryPages } from '@/libs/getDirectoryPages';
import { getSinglePage } from '@/libs/getSinglePage';

const WorkExperience = ({ workExperiencePage, allWorkExperiences }) => {
  const { title, subtitle } = workExperiencePage.frontMatter;

  const workExperiencesToShow = 6;
  const [workExperiences, setWorkExperiences] = useState(
    allWorkExperiences.slice(0, workExperiencesToShow)
  );

  return (
    <Layout metaTitle={title}>
      <PageHeader title={title} subtitle={subtitle} />

      <section className="rounded-b-2xl bg-white py-28 text-dark">
        <div className="container">
          <div className="row gy-4 md:gx-4">
            {workExperiences.map((we) => (
              <div key={we.slug} className="sm:col-6 lg:col-4">
                <WorkExperienceCard
                  slug={we.slug}
                  frontMatter={we.frontMatter}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WorkExperience;

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

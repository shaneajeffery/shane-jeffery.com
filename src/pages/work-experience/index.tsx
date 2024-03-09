import WorkExperienceCard from '@/components/work-experience-card';
import Layout from '@/components/layout';
import PageHeader from '@/components/page-header';
import { getDirectoryPages } from '@/libs/getDirectoryPages';
import { getSinglePage } from '@/libs/getSinglePage';

// @ts-ignore
const WorkExperience = ({ workExperiencePage, allWorkExperiences }) => {
  const { title, subtitle } = workExperiencePage.frontMatter;

  return (
    <Layout metaTitle={title}>
      <PageHeader title={title} subtitle={subtitle} />

      <section className="rounded-b-2xl bg-white py-28 text-dark">
        <div className="container">
          <div className="row gy-4 md:gx-4">
            {/* @ts-ignore */}
            {allWorkExperiences.map((we, i) => (
              <div
                key={we.slug}
                className={`${'sm:col-6 lg:col-4'} ${i === 4 ? 'hidden lg:block' : ''}`}
              >
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
    </Layout>
  );
};

export default WorkExperience;

export const getStaticProps = () => {
  const workExperiencePage = getSinglePage(
    './src/content/work-experience/_index.md'
  );

  // @ts-ignore
  const allWorkExperiences = getDirectoryPages('./src/content/work-experience');

  return {
    props: {
      workExperiencePage: workExperiencePage,
      allWorkExperiences: allWorkExperiences,
    },
  };
};

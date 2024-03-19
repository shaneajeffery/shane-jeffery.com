import WorkExperienceCardBlock from '@/components/work-experience-card-block';
import Layout from '@/components/layout';
import PageHeader from '@/components/page-header';
import { getDirectoryPages } from '@/libs/getDirectoryPages';
import { getSinglePage } from '@/libs/getSinglePage';

const WorkExperience = ({
  workExperiencePage,
  allWorkExperiences,
}: {
  [key: string]: any;
}) => {
  const { title, subtitle } = workExperiencePage.frontMatter;

  return (
    <Layout metaTitle={title}>
      <PageHeader title={title} subtitle={subtitle} />

      <section className="rounded-b-2xl bg-white py-28 text-dark">
        <div className="container">
          <div className="row gy-4 md:gx-4">
            <WorkExperienceCardBlock items={allWorkExperiences} />
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

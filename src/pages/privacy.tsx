import Layout from '@/components/layout';
import PageHeader from '@/components/page-header';
import Markdown from '@/components/react-markdown';
import { getSinglePage } from '@/libs/getSinglePage';

const Privacy = ({ privacyPage }: { [key: string]: any }) => {
  const { title, subtitle } = privacyPage.frontMatter;

  return (
    <Layout metaTitle={title}>
      <PageHeader title={title} subtitle={subtitle} />

      <section className="rounded-b-2xl bg-white py-28 text-dark">
        <div className="container">
          <div className="row justify-center">
            <div className="lg:col-10">
              <div className="content content-dark">
                <Markdown content={privacyPage.content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;

export const getStaticProps = () => {
  const privacy = getSinglePage('./src/content/privacy.md');

  return {
    props: {
      privacyPage: privacy,
    },
  };
};

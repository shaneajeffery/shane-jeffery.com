import Layout from '@/components/layout';
import Link from 'next/link';

export default function PageNotFound() {
  return (
    <Layout metaTitle="Page Not Found">
      <section className="rounded-b-2xl bg-white py-28 text-dark">
        <div className="container">
          <div className="row justify-center">
            <div className="lg:col-10">
              <div className="text-center">
                <h1 className="mb-4 font-medium text-black/75">404</h1>
                <p className="-mb-2 -ml-4 -rotate-12 text-6xl text-black/50">
                  Page
                </p>
                <p className="text-6xl">Not</p>
                <p className="-mt-4 ml-2 -rotate-12 text-6xl text-black/50">
                  Found
                </p>
                <Link href="/" className="button button-dark mt-12">
                  <span>Back to home</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

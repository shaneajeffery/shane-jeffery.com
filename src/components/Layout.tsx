import Footer from '@/components/Footer';
import Header from '@/components/Header';
import siteConfig from '@/config/site.config.json';
import Head from 'next/head';

const Layout = ({
  metaTitle,
  metaDescription,
  metaAuthor,
  metaKeyword,
  ogImage,
  className,
  children,
}) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <title>{metaTitle}</title>

        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="keyword" content={metaKeyword} />
        <meta name="author" content={metaAuthor} />
        <meta name="description" content={metaDescription} />

        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={metaDescription} />

        <link
          rel="shortcut icon"
          href={siteConfig.favicon}
          type="image/x-icon"
        />
      </Head>

      <Header />

      <main
        className={`relative z-10 min-h-[82vh] bg-dark pt-[92px] lg:pt-[106px] ${className ? className : ''}`}
      >
        {children}
      </main>

      <Footer />
    </>
  );
};
export default Layout;

Layout.defaultProps = {
  metaTitle: siteConfig.metaData.title,
  metaDescription: siteConfig.metaData.description,
  metaAuthor: siteConfig.metaData.author,
  metaKeyword: siteConfig.metaData.keyword,
  ogImage: siteConfig.metaData.ogImage,
};

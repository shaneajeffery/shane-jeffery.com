import { ReactNode } from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import siteConfig from '@/config/site.config.json';
import Head from 'next/head';

interface Props {
  metaTitle?: string;
  className?: string;
  children?: ReactNode;
}

const Layout = ({ metaTitle, className, children }: Props) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <title>{`${metaTitle ? `${metaTitle} | ${siteConfig.metaData.title} ` : siteConfig.metaData.title}`}</title>

        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="keyword" content={siteConfig.metaData.keyword} />
        <meta name="description" content={siteConfig.metaData.description} />

        <meta property="og:url" content="https://www.shane-jeffery.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Shane Jeffery | Professional Portfolio"
        />
        <meta
          property="og:title"
          content="Shane Jeffery | Professional Portfolio"
        />
        <meta
          property="og:description"
          content={siteConfig.metaData.description}
        />
        <meta
          property="og:image"
          content="https://www.shane-jeffery.com/images/home-thumbnail.png"
        />

        <link
          rel="shortcut icon"
          href={siteConfig.favicon}
          type="image/x-icon"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
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

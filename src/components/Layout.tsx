import { ReactNode } from 'react';
import Footer from './footer';
import Header from './header';
import siteConfig from '@/config/site.config.json';
import Head from 'next/head';

interface Props {
  metaTitle?: string;
  metaDescription?: string;
  metaKeyword?: string;
  className?: string;
  children?: ReactNode;
}

const Layout = ({
  metaTitle,
  metaDescription,
  metaKeyword,
  className,
  children,
}: Props) => {
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
        <meta name="description" content={metaDescription} />

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

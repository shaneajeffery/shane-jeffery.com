import AOS from 'aos';
import { useEffect } from 'react';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import '../styles/styles.scss';
import 'aos/dist/aos.css';

// @ts-ignore
const AverApp = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
      disable: 'tablet',
    });
  }, []);

  return (
    <section
      // @ts-ignore
      className={`${GeistSans.variable} ${GeistMono.variable} font-primary`}
    >
      <Component {...pageProps} />
    </section>
  );
};

export default AverApp;

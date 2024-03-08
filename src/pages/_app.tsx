import AOS from 'aos';
import { useEffect } from 'react';
import { Outfit } from 'next/font/google';
import localFont from 'next/font/local';

import config from '@/config/site.config.json';
import '../styles/styles.scss';
import 'aos/dist/aos.css';

const outfit = Outfit({
  weight: ['200', '300', '400', '500'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-outfit',
});

const melodrama = localFont({
  src: '../assets/fonts/melodrama/Melodrama-Variable.woff2',
});

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
      className={`${outfit.variable} ${melodrama.variable} font-primary`}
    >
      <Component {...pageProps} />
    </section>
  );
};
export default AverApp;

import config from '@/config/site.config.json';

import { Outfit } from 'next/font/google';
const outfit = Outfit({
  weight: ['200', '300', '400', '500'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-outfit',
});

import localFont from 'next/font/local';
const melodrama = localFont({
  src: '../assets/fonts/melodrama/Melodrama-Variable.woff2',
});

import AOS from 'aos';
import { useEffect } from 'react';

import '../styles/styles.scss';
import 'aos/dist/aos.css';

const AverApp = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
      disable: 'tablet',
    });
  }, []);

  const deviceIndicator = config.settings.deviceIndicator;

  return (
    <section
      className={`${outfit.variable} ${melodrama.variable} font-primary`}
    >
      <Component {...pageProps} />
    </section>
  );
};
export default AverApp;

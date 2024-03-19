import AOS from 'aos';
import { useEffect } from 'react';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import PlausibleProvider from 'next-plausible';
import { AppProps } from 'next/app';

import '../styles/styles.scss';
import 'aos/dist/aos.css';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
      disable: 'tablet',
    });
  }, []);

  return (
    <section
      className={`${GeistSans.variable} ${GeistMono.variable} font-primary`}
    >
      <PlausibleProvider domain="shane-jeffery.com">
        <Component {...pageProps} />
      </PlausibleProvider>
    </section>
  );
};

export default App;

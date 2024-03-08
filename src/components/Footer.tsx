import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import menu from '@/config/menus.json';
import siteConfig from '@/config/site.config.json';

const Footer = () => {
  const { copyright, socialLinks } = siteConfig;
  const { footerMenu } = menu;

  // get the page slug from the url
  const slug = useRouter().asPath;
  const [contactPage, setContactPage] = useState(false);
  useEffect(() => {
    slug.includes('contact') && setContactPage(true);
  }, [slug]);

  return (
    <footer
      className={`${contactPage ? 'pt-24' : 'pt-28'} sticky bottom-0 z-[1] pb-20`}
    >
      <div className="container">
        <div className="row">
          <div className="mb-4 text-center md:col-6 md:text-left">
            <ul className="inline-flex flex-wrap justify-center gap-x-6 md:justify-start">
              {socialLinks.map((item, key) => (
                <li
                  key={key}
                  className="transition-op inline-block duration-300 hover:opacity-75"
                >
                  <a href={item.link} className="link" target="_blank">
                    {item.fullName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4 text-center md:col-6 md:text-right">
            <ul className="inline-flex flex-wrap justify-center gap-x-6 md:justify-end">
              {footerMenu.map((item, key) => (
                <li
                  key={key}
                  className="transition-op inline-block duration-300 hover:opacity-75"
                >
                  <a href={item.link} className="link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4 text-center md:col-6 md:mb-0 md:text-left">
            <p className="text-white/75">{copyright}</p>
          </div>
          <div className="text-center md:col-6 md:text-right">
            <p className="text-white/75"></p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

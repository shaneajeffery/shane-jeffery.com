import siteConfig from '@/config/site.config.json';

const Footer = () => {
  const { copyright, socialLinks } = siteConfig;

  return (
    <footer className={` sticky bottom-0 z-[1] py-10`}>
      <div className="container">
        <div className="row">
          <div className="mb-4 text-center md:col-6 md:text-left">
            <ul className="inline-flex flex-wrap justify-center gap-x-6 md:justify-start">
              {socialLinks.map((item, key) => (
                <li
                  key={key}
                  className="transition-op inline-block duration-300 hover:opacity-75"
                >
                  <a
                    href={item.link}
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.fullName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4 text-center md:col-6 md:text-right">
            <ul className="inline-flex flex-wrap justify-center gap-x-6 md:justify-end">
              <li className="transition-op inline-block duration-300 hover:opacity-75">
                {copyright}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

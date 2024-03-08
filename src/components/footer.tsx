import menu from '../config/menus.json';
import siteConfig from '../config/site.config.json';

const Footer = () => {
    const { copyright, socialLinks } = siteConfig;
    const { footerMenu } = menu;

    return (
        <footer className={`sticky bottom-0 z-[1] pb-20 pt-28`}>
            <div className="container">
                <div className="row">
                    <div className="md:col-6 mb-4 text-center md:text-left">
                        <ul className="inline-flex flex-wrap justify-center gap-x-6 md:justify-start">
                            {socialLinks.map((item, key) => (
                                <li
                                    key={key}
                                    className="transition-op inline-block duration-300 hover:opacity-75"
                                >
                                    <a href={item.link} className="link">
                                        {item.fullName}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:col-6 mb-4 text-center md:text-right">
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
                    <div className="md:col-6 mb-4 text-center md:mb-0 md:text-left">
                        <p className="text-white/75">{copyright}</p>
                    </div>
                    <div className="md:col-6 text-center md:text-right">
                        <p className="text-white/75">
                            Developed by{' '}
                            <a
                                className="link text-white"
                                href="https://themeforest.net/user/platol/portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Platol
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;

import menu from '@/config/menus.json';
import siteConfig from '@/config/site.config.json';
import Image from 'next/image';
import Link from 'next/link';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import style from '@/styles/modules/Footer.module.scss';

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
            {!contactPage && (
                <div className="mb-16 overflow-hidden">
                    <Link
                        href="/contact"
                        className={`${style['footer-cta']} mb-8 block font-secondary text-5xl font-medium`}
                    >
                        <div
                            className={`${style['animated-line']} ${style['animated-line-one']} mb-5`}
                        >
                            <div className={style['line-block']}>
                                <span className="mr-24">
                                    <span className={style['cta-text']}>
                                        Let’s make something
                                    </span>
                                    <Image
                                        className={`ml-16 inline-block ${style['cta-icon']}`}
                                        src="/images/arrow-right.svg"
                                        alt="arrow-right"
                                        height={31}
                                        width={39}
                                    />
                                </span>
                                <span className="mr-24">
                                    <span className={style['cta-text']}>
                                        Let’s make something
                                    </span>
                                    <Image
                                        className={`ml-16 inline-block ${style['cta-icon']}`}
                                        src="/images/arrow-right.svg"
                                        alt="arrow-right"
                                        height={31}
                                        width={39}
                                    />
                                </span>
                                <span className="mr-24">
                                    <span className={style['cta-text']}>
                                        Let’s make something
                                    </span>
                                    <Image
                                        className={`ml-16 inline-block ${style['cta-icon']}`}
                                        src="/images/arrow-right.svg"
                                        alt="arrow-right"
                                        height={31}
                                        width={39}
                                    />
                                </span>
                                <span className="mr-24">
                                    <span className={style['cta-text']}>
                                        Let’s make something
                                    </span>
                                    <Image
                                        className={`ml-16 inline-block ${style['cta-icon']}`}
                                        src="/images/arrow-right.svg"
                                        alt="arrow-right"
                                        height={31}
                                        width={39}
                                    />
                                </span>
                                <span className="mr-24">
                                    <span className={style['cta-text']}>
                                        Let’s make something
                                    </span>
                                    <Image
                                        className={`ml-16 inline-block ${style['cta-icon']}`}
                                        src="/images/arrow-right.svg"
                                        alt="arrow-right"
                                        height={31}
                                        width={39}
                                    />
                                </span>
                            </div>
                            <div className={style['line-block-copy']}>
                                <span className="mr-24">
                                    <span className={style['cta-text']}>
                                        Let’s make something
                                    </span>
                                    <Image
                                        className={`ml-16 inline-block ${style['cta-icon']}`}
                                        src="/images/arrow-right.svg"
                                        alt="arrow-right"
                                        height={31}
                                        width={39}
                                    />
                                </span>
                                <span className="mr-24">
                                    <span className={style['cta-text']}>
                                        Let’s make something
                                    </span>
                                    <Image
                                        className={`ml-16 inline-block ${style['cta-icon']}`}
                                        src="/images/arrow-right.svg"
                                        alt="arrow-right"
                                        height={31}
                                        width={39}
                                    />
                                </span>
                                <span className="mr-24">
                                    <span className={style['cta-text']}>
                                        Let’s make something
                                    </span>
                                    <Image
                                        className={`ml-16 inline-block ${style['cta-icon']}`}
                                        src="/images/arrow-right.svg"
                                        alt="arrow-right"
                                        height={31}
                                        width={39}
                                    />
                                </span>
                                <span className="mr-24">
                                    <span className={style['cta-text']}>
                                        Let’s make something
                                    </span>
                                    <Image
                                        className={`ml-16 inline-block ${style['cta-icon']}`}
                                        src="/images/arrow-right.svg"
                                        alt="arrow-right"
                                        height={31}
                                        width={39}
                                    />
                                </span>
                                <span className="mr-24">
                                    <span className={style['cta-text']}>
                                        Let’s make something
                                    </span>
                                    <Image
                                        className={`ml-16 inline-block ${style['cta-icon']}`}
                                        src="/images/arrow-right.svg"
                                        alt="arrow-right"
                                        height={31}
                                        width={39}
                                    />
                                </span>
                            </div>
                        </div>

                        <div
                            className={`${style['animated-line']} ${style['animated-line-two']}`}
                        >
                            <div className={style['line-block']}>
                                <span className="mr-24">
                                    <span className={style['cta-text']}>
                                        Let’s make something
                                    </span>
                                    <Image
                                        className={`ml-16 inline-block ${style['cta-icon']}`}
                                        src="/images/arrow-right.svg"
                                        alt="arrow-right"
                                        height={31}
                                        width={39}
                                    />
                                </span>
                                <span className="mr-24">
                                    <span className={style['cta-text']}>
                                        Let’s make something
                                    </span>
                                    <Image
                                        className={`ml-16 inline-block ${style['cta-icon']}`}
                                        src="/images/arrow-right.svg"
                                        alt="arrow-right"
                                        height={31}
                                        width={39}
                                    />
                                </span>
                                <span className="mr-24">
                                    <span className={style['cta-text']}>
                                        Let’s make something
                                    </span>
                                    <Image
                                        className={`ml-16 inline-block ${style['cta-icon']}`}
                                        src="/images/arrow-right.svg"
                                        alt="arrow-right"
                                        height={31}
                                        width={39}
                                    />
                                </span>
                                <span className="mr-24">
                                    <span className={style['cta-text']}>
                                        Let’s make something
                                    </span>
                                    <Image
                                        className={`ml-16 inline-block ${style['cta-icon']}`}
                                        src="/images/arrow-right.svg"
                                        alt="arrow-right"
                                        height={31}
                                        width={39}
                                    />
                                </span>
                                <span className="mr-24">
                                    <span className={style['cta-text']}>
                                        Let’s make something
                                    </span>
                                    <Image
                                        className={`ml-16 inline-block ${style['cta-icon']}`}
                                        src="/images/arrow-right.svg"
                                        alt="arrow-right"
                                        height={31}
                                        width={39}
                                    />
                                </span>
                            </div>
                            <div className={style['line-block-copy']}>
                                <span className="mr-24">
                                    <span className={style['cta-text']}>
                                        Let’s make something
                                    </span>
                                    <Image
                                        className={`ml-16 inline-block ${style['cta-icon']}`}
                                        src="/images/arrow-right.svg"
                                        alt="arrow-right"
                                        height={31}
                                        width={39}
                                    />
                                </span>
                                <span className="mr-24">
                                    <span className={style['cta-text']}>
                                        Let’s make something
                                    </span>
                                    <Image
                                        className={`ml-16 inline-block ${style['cta-icon']}`}
                                        src="/images/arrow-right.svg"
                                        alt="arrow-right"
                                        height={31}
                                        width={39}
                                    />
                                </span>
                                <span className="mr-24">
                                    <span className={style['cta-text']}>
                                        Let’s make something
                                    </span>
                                    <Image
                                        className={`ml-16 inline-block ${style['cta-icon']}`}
                                        src="/images/arrow-right.svg"
                                        alt="arrow-right"
                                        height={31}
                                        width={39}
                                    />
                                </span>
                                <span className="mr-24">
                                    <span className={style['cta-text']}>
                                        Let’s make something
                                    </span>
                                    <Image
                                        className={`ml-16 inline-block ${style['cta-icon']}`}
                                        src="/images/arrow-right.svg"
                                        alt="arrow-right"
                                        height={31}
                                        width={39}
                                    />
                                </span>
                                <span className="mr-24">
                                    <span className={style['cta-text']}>
                                        Let’s make something
                                    </span>
                                    <Image
                                        className={`ml-16 inline-block ${style['cta-icon']}`}
                                        src="/images/arrow-right.svg"
                                        alt="arrow-right"
                                        height={31}
                                        width={39}
                                    />
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            )}
            <div className="container">
                <div className="row">
                    <div className="mb-4 text-center md:col-6 md:text-left">
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

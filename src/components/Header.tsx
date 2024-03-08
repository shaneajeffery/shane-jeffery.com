import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import menu from '@/config/menus.json';
import siteConfig from '@/config/site.config.json';
import style from '@/styles/modules/Header.module.scss';

const Header = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const { socialLinks } = siteConfig;
  const { mainMenu } = menu;
  const mainMenuLength = mainMenu.length;

  // TODO: Fix the types on these and remove the <any>
  const [indicatorPosition, setIndicatorPosition] = useState<any>();
  const navRef = useRef<any>(null);
  const activeLinkRef = useRef<any>(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavClose, setMobileNavClose] = useState(true);
  const [isInvisible, setIsInvisible] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const activeLink = navRef.current.querySelector('.active');

    if (activeLink) {
      activeLinkRef.current = activeLink;

      setIndicatorPosition({
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
      });
    }
  }, [mainMenu]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    mobileNavClose
      ? html.classList.remove('overflow-hidden')
      : html.classList.add('overflow-hidden');
  }, [mobileNavClose]);

  useEffect(() => {
    const banner = document.querySelector('.banner');
    // @ts-ignore
    const bannerScrollHeight = banner?.scrollHeight + 100;
    const observer = new IntersectionObserver(
      (entry) => {
        window.addEventListener('scroll', () =>
          entry[0].isIntersecting ? setIsActive(false) : setIsActive(true)
        );

        let lastScrollTop = 0;
        const handleScroll = () => {
          const currentScrollTop = document.documentElement.scrollTop;
          if (
            currentScrollTop > bannerScrollHeight &&
            currentScrollTop > lastScrollTop
          ) {
            setIsInvisible(true);
          } else {
            setIsInvisible(false);
          }

          lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      },
      { threshold: [0] }
    );

    banner && observer.observe(banner);
  }, []);

  const handleLinkMouseEnter = (event: { currentTarget: any }) => {
    const link = event.currentTarget;

    setIndicatorPosition({
      left: link.offsetLeft,
      width: link.offsetWidth,
    });
  };

  const handleLinkMouseLeave = () => {
    if (activeLinkRef.current) {
      setIndicatorPosition({
        left: activeLinkRef.current.offsetLeft,
        width: activeLinkRef.current.offsetWidth,
      });
    }
  };

  const handleLinkClick = (event: { currentTarget: any }) => {
    const link = event.currentTarget;
    activeLinkRef.current = link;

    setIndicatorPosition({
      left: link.offsetLeft,
      width: link.offsetWidth,
    });
  };

  return (
    <header
      className={`fixed top-0 z-[9000] w-full ${style.header} ${isActive ? style.active : ''} ${isInvisible ? 'invisible -translate-y-full' : ''}`}
    >
      <div className="container">
        <div className="relative flex items-center justify-between py-6">
          <div
            className={`w-1/4 transition-all duration-300 ${isScrolled ? 'lg:-translate-x-8 lg:opacity-0' : ''}`}
          ></div>
          <nav
            ref={navRef}
            className={`${style.navbar} ${mobileNavClose ? '!h-12 w-12 lg:!h-auto lg:w-auto' : 'w-56 lg:w-auto'} ${!mobileNavClose ? style.navbarOpen : ''}`}
            style={{
              height: mobileNavClose ? 'auto' : 42 + mainMenuLength * 40 + 'px',
            }}
          >
            {indicatorPosition && (
              <span
                className={style.indicator}
                style={indicatorPosition}
              ></span>
            )}

            {mainMenu.map((item, key) => (
              <Link
                key={key}
                href={item.link}
                className={
                  pathname == item.link ||
                  (pathname.includes('/blog') && item.link == '/blog') ||
                  (pathname.includes('/project') && item.link == '/project')
                    ? 'active !text-white/100'
                    : ''
                }
                onMouseEnter={handleLinkMouseEnter}
                onMouseLeave={handleLinkMouseLeave}
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div
            className={`${style.navOverlay} ${mobileNavClose ? '' : style.navOverlayVisible}`}
            onClick={() => setMobileNavClose(true)}
          ></div>

          <button
            type="button"
            aria-label="Toggle Mobile Navigation"
            className={`${style.navToggler} ${mobileNavClose ? '' : 'scale-[0.85]'} `}
            onClick={() => setMobileNavClose(!mobileNavClose)}
          >
            <svg
              className={mobileNavClose ? '' : '-translate-x-[3rem]'}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 8l16 0"></path>
              <path d="M4 16l16 0"></path>
            </svg>
            <svg
              className={
                mobileNavClose
                  ? 'translate-x-[3rem] -rotate-180'
                  : 'translate-x-0 rotate-0'
              }
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M18 6l-12 12"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          </button>

          <div
            className={`hidden w-1/4 text-right text-sm transition-all duration-300 lg:block ${isScrolled ? 'lg:translate-x-8 lg:opacity-0' : ''}`}
          >
            <span className="mb-1 block text-white/75">Social Links:</span>
            <ul className="inline-flex gap-x-4">
              {socialLinks.map((item, key) => (
                <li
                  key={key}
                  className="transition-op inline-block duration-300 hover:opacity-75"
                >
                  <a href={item.link} className="link" target="_blank">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;

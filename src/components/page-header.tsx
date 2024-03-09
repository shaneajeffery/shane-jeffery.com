import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import BreadcrumbItem from '@/components/breadcrumb-item';
import Breadcrumb from '@/components/breadcrumb';
import { capitalizeText } from '@/utils/capitalizeText';

interface PageHeaderBreadcrumb {
  href: string;
  label: string;
  isCurrent: boolean;
}

interface Props {
  title: string;
  subtitle: string;
}

const PageHeader = ({ title, subtitle }: Props) => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<PageHeaderBreadcrumb[]>([]);

  useEffect(() => {
    const pathWithoutQuery = router.asPath.split('?')[0];
    let pathArray = pathWithoutQuery.split('/');
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== '');

    const breadcrumbs = pathArray.map((path, index) => {
      const href = '/' + pathArray.slice(0, index + 1).join('/');
      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1),
        isCurrent: index === pathArray.length - 1,
      };
    });

    setBreadcrumbs(breadcrumbs);
  }, [router.asPath]);

  return (
    <section className="banner bg-white">
      <div className="page-banner relative z-10 rounded-b-2xl bg-dark pb-24 pt-20">
        <div className="container">
          <div className="row items-end" data-aos="fade">
            <div className="text-center sm:col-8 sm:text-left">
              <h1 className="-mt-[6px] mb-8 text-center font-secondary text-4xl font-medium sm:text-left md:text-5xl">
                {capitalizeText(title)}
              </h1>

              <Breadcrumb>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-3"
                    style={{ transform: 'rotateY(180deg)' }}
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2"></path>
                    <path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5"></path>
                    <path d="M16 19h6"></path>
                    <path d="M19 16l3 3l-3 3"></path>
                  </svg>
                </li>
                <BreadcrumbItem href="/">Home</BreadcrumbItem>
                {breadcrumbs &&
                  breadcrumbs.map((breadcrumb) => (
                    <React.Fragment key={breadcrumb.href}>
                      <li>
                        <span className="px-4">•</span>
                      </li>
                      <BreadcrumbItem href={breadcrumb.href}>
                        {breadcrumb.label}
                      </BreadcrumbItem>
                    </React.Fragment>
                  ))}
              </Breadcrumb>
            </div>
            <div className="mt-6 block text-center sm:col-4 sm:mt-0 sm:text-right">
              <span className="font-secondary text-2xl leading-none text-white/75">
                {subtitle}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PageHeader;

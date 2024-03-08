import Link from 'next/link';
import { capitalizeText } from '@/utils/capitalizeText';
import { ReactElement } from 'react';

interface Props {
  children: ReactElement | string;
  href: string;
  isCurrent: boolean;
}

const BreadcrumbItem = ({ children, href, isCurrent, ...props }: Props) => {
  return (
    <li {...props}>
      <Link className="link" href={href} passHref>
        {capitalizeText(children)}
      </Link>
    </li>
  );
};

export default BreadcrumbItem;

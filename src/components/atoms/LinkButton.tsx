/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { FC } from 'react';

type Props = {
  href: string;
};

const LinkButton: FC<Props> = ({ href, children }) => {
  return (
    <Link passHref href={href}>
      <a className="w-48 bg-blue-900 hover:bg-blue-700 h-10 rounded-md shadow-sm text-white flex items-center justify-center">
        <span>{children}</span>
      </a>
    </Link>
  );
};

export default LinkButton;

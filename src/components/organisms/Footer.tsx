/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';
import Link from 'next/link';

const Footer: FC = () => {
  return (
    <footer className="w-100 h-14 border-t-min">
      <ul className="p-4 flex flex-row items-center justify-start h-full">
        <li className="hover:text-gray-500">
          &copy;{' '}
          <Link passHref href="https://www.michaelsattler.at/">
            <a target="_blank">Michael Sattler</a>
          </Link>{' '}
          2021
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

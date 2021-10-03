/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';
import Link from 'next/link';

import { FaGithubAlt } from '@react-icons/all-files/fa/FaGithubAlt';

const Nav: FC = () => {
  return (
    <nav className="w-100 h-14 border-b-min">
      <ul className="flex flex-row items-center justify-between h-full">
        <div className="flex flex-row items-center justify-start h-full children-nice-lis">
          <li>
            <Link passHref href="/">
              <a>Next Starter</a>
            </Link>
          </li>
          <li>
            <Link passHref href="/getting-started">
              <a>Getting started</a>
            </Link>
          </li>
        </div>
        <div className="flex flex-row items-center justify-start h-full children-nice-lis">
          <li>
            <Link passHref href="https://github.com/mlimesoda/next-starter">
              <a target="_blank">
                <FaGithubAlt size={20} />
              </a>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;

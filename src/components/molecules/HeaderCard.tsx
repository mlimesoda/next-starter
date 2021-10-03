import { FC } from 'react';
import LinkButton from '$atoms/LinkButton';

const HeaderCard: FC = () => {
  return (
    <div className="font-mono flex flex-col items-start justify-center max-w-xl border border-gray-200 rounded-md transition:shadow shadow-2xl m-4 md:ml-12 p-8">
      <h1 className="text-4xl mb-3">
        Next.js Starter Kit <span className="px-4">🚀</span>
      </h1>
      <p className="text-1xl">
        Jumpstart your Next.js App with Typescript, eslint configuration and
        other nifty tools for development already in place!
      </p>
      <div className="mt-6  flex flex-row items-center justify-end w-full">
        <LinkButton href="/getting-started">Get started!</LinkButton>
      </div>
    </div>
  );
};

export default HeaderCard;

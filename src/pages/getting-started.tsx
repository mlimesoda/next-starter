import { FC } from 'react';

const GettingStarted: FC = () => {
  return (
    <div className="mx-4 article">
      <h2 className="mt-4 text-3xl">Getting started</h2>
      <p>Download the repository: </p>
      <p className="code-block">
        <code>
          $ git clone https://github.com/mlimesoda/next-starter.git next-starter{' '}
        </code>
      </p>
      <p>Install packages:</p>
      <p className="code-block">
        <code>$ cd next-starter && npm install </code>
      </p>
      <p>Start developing:</p>
      <p className="code-block">
        <code>$ npm run dev </code>
      </p>
    </div>
  );
};

export default GettingStarted;

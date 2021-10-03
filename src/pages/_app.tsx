import 'tailwindcss/tailwind.css';
import '$styles/index.css';

import type { AppProps } from 'next/app';

import Footer from '$organisms/Footer';
import Nav from '$organisms/Nav';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div
      id="app"
      className="text-gray-800 min-h-screen flex flex-col justify-between"
    >
      <Nav />
      <main className="h-full flex-1 flex flex-col">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;

import '../styles/globals.css';
import { DefaultSeo } from 'next-seo';

// import your default seo configuration
import SEO from '../next-seo.config';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

import '@/styles/globals.css';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
MyApp.propTypes = { Component: PropTypes.any, pageProps: PropTypes.any };
export default MyApp;

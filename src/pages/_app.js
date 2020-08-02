import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import theme from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}
MyApp.propTypes = { Component: PropTypes.any, pageProps: PropTypes.any };
export default MyApp;

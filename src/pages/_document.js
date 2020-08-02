import Document, { Head, Main, NextScript } from 'next/document';

const GA_TRACKING_ID = 'UA-172662441-1';
export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            httpEquiv="Content-Type"
            content="text/html; charset=ISO-8859-1"
          />
          <meta content="follow, index" name="robots" />
          <link
            href="/favicons/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/favicons/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/favicons/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link href="/favicons/site.webmanifest" rel="manifest" />
          <link
            color="#d08a48"
            href="/favicons/safari-pinned-tab.svg"
            rel="mask-icon"
          />
          <link href="/favicons/favicon.ico" rel="shortcut icon" />
          <meta content="en_US" property="og:locale" />
          <meta content="##b6302f" name="theme-color" />
          <meta content="##b6302f" name="msapplication-TileColor" />
          <meta
            content="/favicons/browserconfig.xml"
            name="msapplication-config"
          />
          <meta content="summary_large_image" name="twitter:card" />
          <meta content="@ThatsPranav" name="twitter:site" />
          <meta content="@ThatsPranav" name="twitter:creator" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-172662441-1"
          ></script>
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${GA_TRACKING_ID}');
                            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

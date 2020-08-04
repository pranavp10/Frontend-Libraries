import { NextSeo } from 'next-seo';

const SEO = () => (
  <NextSeo
    title="Frontend Libraries"
    description="It will help you setup the Development environment which will keep the personal and Development Directory different so that you can work fearlessly."
    canonical="https://libraries.now.sh/"
    openGraph={{
      url: 'https://libraries.now.sh/',
      title: 'Frontend Libraries',
      description:
        'It will help you setup the Development environment which will keep the personal and Development Directory different so that you can work fearlessly.',
      images: [
        {
          url: 'https://libraries.now.sh/shareSEO.png',
          alt: 'SEO Image',
        },
      ],
      site_name: 'Frontend Libraries',
    }}
  />
);
export default SEO;

import { NextSeo } from 'next-seo';

const SEO = () => (
  <NextSeo
    title="Frontend Libraries"
    description=" Best Frontend Libraries which are used by professionals working at facebook, Google, Microsoft and many other top companies."
    canonical="https://libraries.now.sh/"
    openGraph={{
      url: 'https://libraries.now.sh/',
      title: 'Frontend Libraries',
      description:
        ' Best Frontend Libraries which are used by professionals working at facebook, Google, Microsoft and many other top companies.',
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

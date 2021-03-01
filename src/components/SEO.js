import { NextSeo } from 'next-seo';

const SEO = () => (
  <NextSeo
    title="Frontend Libraries"
    description=" Best Frontend Libraries which are used by professionals working at facebook, Google, Microsoft and many other top companies."
    canonical="https://libraries.pranavp10.me/"
    openGraph={{
      url: 'https://libraries.pranavp10.me/',
      title: 'Frontend Libraries',
      description:
        ' Best Frontend Libraries which are used by professionals working at facebook, Google, Microsoft and many other top companies.',
      images: [
        {
          url: 'https://libraries.pranavp10.me/shareSEO.png',
          alt: 'SEO Image',
        },
      ],
      site_name: 'Frontend Libraries',
    }}
  />
);
export default SEO;

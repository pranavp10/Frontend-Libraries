import { NextSeo } from 'next-seo';

const SEO = () => (
  <NextSeo
    title="Frontend Libraries"
    description="Best Frontend Libraries which has been used by folks working at facebook,Google,Microsoft and may more."
    canonical="https://libraries.now.sh/"
    openGraph={{
      url: 'https://libraries.now.sh/',
      title: 'Frontend Libraries',
      description:
        'Best Frontend Libraries which has been used by folks working at facebook,Google,Microsoft and may more.',
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

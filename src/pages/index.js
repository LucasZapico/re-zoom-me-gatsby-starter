import React from 'react';
import { Home, SEO } from '../components/_index';

const locationFocus = 'Washington State';

const Seo = {
  title: `Education for adult family home providers ${locationFocus}`,
  description: `Trusted quality adult family consulting. With over 30 years successful adult family home care. `,
};

export const IndexPage = ({ data, location }) => {
  const { title, description, date } = Seo;
  return (
    <>
      <SEO
        title={Seo.title}
        description={Seo.description}
        location={location}
      />
      <Home locationFocus={locationFocus} />
    </>
  );
};

export default IndexPage;

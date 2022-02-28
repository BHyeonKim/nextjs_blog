import { Fragment } from 'react';

import Hero from '../components/home-page/hero';

function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      {/* <FreaturedPost /> */}
    </Fragment>
  );
}

export default HomePage;

// 1) Hero => Present ourselves
// 2) Featured Posts

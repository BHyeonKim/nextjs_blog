import { Fragment } from 'react';

import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting started with NextJS',
    image: 'getting-started-nextjs.png',
    excert:
      'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with server-side rendering.',
    date: '2022-02-02',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting started with NextJS',
    image: 'getting-started-nextjs.png',
    excert:
      'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with server-side rendering.',
    date: '2022-02-02',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting started with NextJS',
    image: 'getting-started-nextjs.png',
    excert:
      'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with server-side rendering.',
    date: '2022-02-02',
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting started with NextJS',
    image: 'getting-started-nextjs.png',
    excert:
      'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with server-side rendering.',
    date: '2022-02-02',
  },
];

function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;

// 1) Hero => Present ourselves
// 2) Featured Posts

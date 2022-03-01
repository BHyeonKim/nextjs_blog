import classes from './post-content.module.css';

import PostHeader from './post-header';

const DUMMY_POST = {
  slug: 'getting-started-with-nextjs',
  title: 'Getting started with NextJS',
  image: 'getting-started-nextjs.png',
  date: '2022-02-02',
  content: '# This is a first post',
};

function PostContent(props) {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
    </article>
  );
}

export default PostContent;

import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';

function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  console.log(allPosts);

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 600,
  };
}

export default AllPostsPage;

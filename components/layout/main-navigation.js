import Link from 'next/link';
import Logo from './logo';

import classes from './main-navigation.module.css';

function MainNavigation(props) {
  // To use Link, I need to wrap with <a>tag when the content is not plane text
  return (
    <header className={classes.header}>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/posts'>Posts</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

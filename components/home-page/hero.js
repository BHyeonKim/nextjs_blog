import Image from 'next/image';
import classes from './hero.module.css';

function Hero(props) {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/choco.jpg'
          alt='Image of representing bobo'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m bobo</h1>
      <p>
        I blog about web development - espacially frontend frameworks like react
      </p>
    </section>
  );
}

export default Hero;

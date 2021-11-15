import Image from 'next/image';
import Link from 'next/link';
import parse from 'html-react-parser';
import styles from './home.module.scss';

import { RichText } from './rich-text';

const Home = ({data: {
  heroImage: {url},
  imageHeroText: {html},
  ctaButtonLabel
}}) => {
  return (
   <div className="m-auto max-w-lg mt-10">
    <Image src={url} alt="image-hero" layout="fill"/>
    <div className={styles['hero-intro-text']}>
      <RichText>
        {parse(html)}
      </RichText>
      <button className={styles['hero-cta-btn']}>
        <Link href="/workouts">{ctaButtonLabel}</Link>
      </button>
    </div>
   </div>
  )
}

export default Home;
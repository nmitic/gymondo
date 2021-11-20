import Image from 'next/image';
import Link from 'next/link';
import parse from 'html-react-parser';

import { RichText } from './rich-text';

const Home = ({data: {
  heroImage: {url},
  imageHeroText: {html},
  ctaButtonLabel
}}) => {
  return (
   <div className="m-auto max-w-lg mt-10">
    <Image src={url} alt="image-hero" layout="fill"/>
    <div className="relative text-white">
      <div className="mb-10">
        <RichText>
          {parse(html)}
        </RichText>
      </div>
      <button className="bg-transparent hover:bg-gymondo text-gymondo font-semibold hover:text-white py-2 px-4 border border-gymondo hover:border-transparent rounded">
        <Link href="/workouts">{ctaButtonLabel}</Link>
      </button>
    </div>
   </div>
  )
}

export default Home;
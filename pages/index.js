import Home, { getHomeData } from '../modules/home';

export default Home;

export async function getServerSideProps(context) {
  const { data: {landingPage: data} } = await getHomeData({slug: 'home'});

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data
    }
  }
}
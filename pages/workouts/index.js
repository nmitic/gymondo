import Home, { getHomePageData } from '../../modules/home';

export default Home;

export async function getServerSideProps(context) {
  const data = await getHomePageData({pageNumber: 1, limit: 20});

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
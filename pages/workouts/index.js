import Home, { getWorkoutsData } from '../../modules/workouts';

export default Home;

export async function getServerSideProps() {
  const data = await getWorkoutsData({pageNumber: 1, limit: 20});

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
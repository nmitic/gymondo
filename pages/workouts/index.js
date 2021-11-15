import Home, { getWorkoutsData } from '../../modules/workouts';

export default Home;

export async function getServerSideProps() {
  const { 
    data: {workouts: data, workoutsConnection: {aggregate: count}} 
  } = await getWorkoutsData({pageNumber: 1, limit: 10});

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data,
      count
    }
  }
}
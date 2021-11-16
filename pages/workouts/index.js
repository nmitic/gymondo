import Home, { getWorkoutsData } from '../../modules/workouts';

export default Home;

export async function getServerSideProps(context) {
  const pageNumber = context.query.page ? parseInt(context.query.page) : 1;
  const limit = 20;
  const { 
    data: {workouts: data, workoutsConnection: {aggregate: { count: totalCount }}} 
  } = await getWorkoutsData({pageNumber: pageNumber * limit, limit});

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data,
      totalCount
    }
  }
}
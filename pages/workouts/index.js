import Home, { getWorkoutsData } from '../../modules/workouts';

export default Home;

export async function getServerSideProps(context) {
  const pageNumber = context.query.page ? parseInt(context.query.page) : 0;
  const limit = context.query.page ? parseInt(context.query.limit) : 20;
  const filter = {
    startDate: context.query.startDate,
    category: context.query.category
  }
  
  const { 
    data: {workouts: data, workoutsConnection: {aggregate: { count: totalCount }}} 
  } = await getWorkoutsData({pageNumber: pageNumber * limit, limit, filter});

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
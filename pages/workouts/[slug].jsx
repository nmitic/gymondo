import WorkoutDetailPage, { getWorkoutDetailData } from '../../modules/workout-detail';

export default WorkoutDetailPage;

export async function getServerSideProps(context) {
  const data = await getWorkoutDetailData({slug: context.params.slug})

  if (!data) {
    return {
      notFound: true,
    }
  }
  
  return {
    props: {data}
  }
}

import { CONTENT_API_PATH } from "../../graphQL/api-paths";
import { workoutDetailQuery } from './workout-detail.query';

export const getWorkoutDetailData = async ({slug}) => {
  const res = await fetch(CONTENT_API_PATH, {
    method: 'POST',
    body: JSON.stringify({
      query: workoutDetailQuery,
      variables: {
        slug
      }
    }),
    headers: {'Content-Type': 'application/json'}
  });
  const data = res.json();

  return data;
}
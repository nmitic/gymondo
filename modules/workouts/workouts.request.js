
import { CONTENT_API_PATH } from "../../graphQL/api-paths";
import { workoutsRequestQuery } from './workouts.query';

export const getWorkoutsData = async ({pageNumber, limit, filter = null}) => {
  const res = await fetch(CONTENT_API_PATH, {
    method: 'POST',
    body: JSON.stringify({
      query: workoutsRequestQuery,
      variables: {
        pageNumber,
        limit,
        ...(Boolean(filter) && {filter})
      }
    }),
    headers: {'Content-Type': 'application/json'}
  });
  const data = res.json();

  return data;
}
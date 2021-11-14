
import { CONTENT_API_PATH } from "../../graphQL/api-paths";
import { homeRequestQuery } from './workouts.query';

export const getWorkoutsData = async ({pageNumber, limit}) => {
  const res = await fetch(CONTENT_API_PATH, {
    method: 'POST',
    body: JSON.stringify({
      query: homeRequestQuery,
      variables: {
        pageNumber,
        limit
      }
    }),
    headers: {'Content-Type': 'application/json'}
  });
  const data = res.json();

  return data;
}
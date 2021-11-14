
import { CONTENT_API_PATH } from "../../graphQL/api-paths";
import { homeRequestQuery } from './home.query';

export const getHomeData = async ({slug}) => {
  const res = await fetch(CONTENT_API_PATH, {
    method: 'POST',
    body: JSON.stringify({
      query: homeRequestQuery,
      variables: {
        slug,
      }
    }),
    headers: {'Content-Type': 'application/json'}
  });
  const data = res.json();

  return data;
}
import fetch from 'node-fetch';
import uniqid from 'uniqid';
import { getRandomDateInRange } from './utils/generateRandomDate.mjs';
import { getRandomCategory } from './utils/getRandomCategory.mjs';

const GRAPH_CMS_CONTENT_API = 'https://api-eu-central-1.graphcms.com/v2/ckvuvtovi261h01z6bsp44qt1/master';

const mutationQuery = `
  mutation MyMutation(
    $category: WorkoutCategory,
    $startDate: Date,
    $title: String,
    $slug: String,
    $description: String,
  ) {
    createWorkout(
      data: {
        category: $category, 
        startDate: $startDate, 
        title: $title, 
        slug: $slug, 
        description: $description
      }
    ) {
      category
      slug
      title
      description
      startDate
    }
    publishWorkout(where: {slug: $slug}, to: PUBLISHED) {
      id,
      slug
    }
  }
`;

const createWorkout = ({title, description, startDate, category, slug}) => {
  fetch(GRAPH_CMS_CONTENT_API, {
    method: 'post',
    body: JSON.stringify({
      query: mutationQuery,
      variables: {
        category,
        title,
        startDate,
        slug,
        description
      }
    }),
    headers: {'Content-Type': 'application/json'}
  })
    .then(r => r.json())
    .then(data => console.log('data returned:', data));
}

createWorkout({
  title: "Tone your brain",
  description: 'Just take coffee and if your brain is not strong enough then take some more, watch for your heart tho!',
  startDate: getRandomDateInRange(new Date(2017, 2, 2), new Date(2017, 3, 3)),
  category: getRandomCategory(),
  slug: `tone-your-brain-${uniqid()}`
});
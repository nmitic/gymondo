import fetch from 'node-fetch';
import uniqid from 'uniqid';
import randomSentence from 'random-sentence';
import randomWords from 'random-words';
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
  return fetch(GRAPH_CMS_CONTENT_API, {
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

const createRandomWorkouts = async quantity => {
  const randomSlugTitle = randomWords({min: 1, max: 3, join: ' '});
  
  await createWorkout({
    title: randomSlugTitle,
    description: randomSentence({min: 4, max: 14}),
    startDate: getRandomDateInRange(new Date(2021, 8, 8), new Date(2023, 3, 3)),
    category: getRandomCategory(),
    slug: `${randomSlugTitle.replaceAll(' ', '-')}-${uniqid()}`
  });

  quantity && --quantity && createRandomWorkouts(quantity);
}

createRandomWorkouts(2);
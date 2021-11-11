import fetch from 'node-fetch';

const GRAPH_CMS_CONTENT_API = 'https://api-eu-central-1.graphcms.com/v2/ckvuvtovi261h01z6bsp44qt1/master';

const mutationQuery = `
  mutation GenerateWorkout {
    createWorkout(
      data: {category: c1, startDate: "2021-11-11", title: "Nikola", slug: "perica", description: "nikola"}
    ) {
      category
      slug
      title
      description
      startDate
    }
  }
`;

const createWorkout = ({title, description, startDate, category}) => {
  fetch(GRAPH_CMS_CONTENT_API, {
    method: 'post',
    body: JSON.stringify({query: mutationQuery}),
    headers: {'Content-Type': 'application/json'}
  })
    .then(r => r.json())
    .then(data => console.log('data returned:', data));
}

createWorkout({
  title: "nikola",
  description: 'description',
  startDate: 'startDate',
  category: 'category'
});
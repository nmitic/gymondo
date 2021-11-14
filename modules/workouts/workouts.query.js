export const workoutsRequestQuery = `
  query WorkoutsQuery($pageNumber: Int, $limit: Int) {
    workouts(first: $limit, skip: $pageNumber) {
      title
      description
      category
      slug
      startDate
    }
  }
`;
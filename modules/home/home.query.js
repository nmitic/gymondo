export const homeRequestQuery = `
  query HomeQuery($pageNumber: Int, $limit: Int) {
    workouts(first: $limit, skip: $pageNumber) {
      title
      description
      category
      slug
      startDate
    }
  }
`;
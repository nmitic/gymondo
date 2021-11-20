export const workoutsRequestQuery = `
  query Workouts($pageNumber: Int, $limit: Int, $filter: WorkoutWhereInput) {
    workouts(
      first: $limit
      skip: $pageNumber
      where: $filter
    ) {
      title
      description
      category
      slug
      startDate
    }
    workoutsConnection(where: $filter) {
      aggregate {
        count
      }
    }
  }
`;
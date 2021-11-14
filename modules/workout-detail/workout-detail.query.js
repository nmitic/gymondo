export const workoutDetailQuery = `
  query WorkoutDetailQuery($slug: String) {
    workout(where: {slug: $slug}) {
      title
      description
      category
      startDate
    }
  }
`;
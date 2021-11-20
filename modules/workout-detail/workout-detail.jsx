const WorkoutDetailPage = ({data}) => {
  return (
    <article className="m-auto max-w-2xl pt-10">
      <h1 className="text-2xl mb-4">Title: {data.title}</h1>
      <p className="text-sm mb-3">Description: {data.description}</p>
      <p>
        <time 
          dateTime={data.startDate}
          className="text-lg"
        >
          date: {data.startDate}
        </time>
      </p>
      <p className="text-m mb-3">category: {data.category}</p>
    </article>
  )
}

export default WorkoutDetailPage;
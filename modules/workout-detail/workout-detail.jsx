const WorkoutDetailPage = ({data}) => {
  return (
    <div>
      <h1 className="text-2xl mb-4">{data.title}</h1>
      <p className="text-sm mb-3">{data.description}</p>
      <time 
        dateTime={data.startDate}
        className="text-lg"
      >
        {data.startDate}
      </time>
    </div>
  )
}

export default WorkoutDetailPage;
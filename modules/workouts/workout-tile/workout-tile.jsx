import Link from 'next/link';

const WorkoutTile = ({
  title,
  description,
  startDate,
  category,
  slug,
}) => {
  return (
    <Link
      key={slug}
      href={`/workouts/${encodeURIComponent(slug)}`}
    >
      <a className="hover:border-gymondo border-2 transition-all p-2">
        <h1 className="text-2xl mb-4">{title}</h1>
        <p className="text-sm mb-3">{description}</p>
        <p className="text-m mb-3">{category}</p>
        <time
          dateTime={startDate}
          className="text-lg"
        >
          {startDate}
        </time>
      </a>
    </Link>
  )
}

export default WorkoutTile;

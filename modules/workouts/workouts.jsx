import Link from 'next/link';
import { useRouter } from 'next/router'
import { Pagination } from './pagination';

const Workouts = ({data, totalCount}) => {
  const router = useRouter();
  const currentPage = parseInt(router.query.page);

  return (
    <>
      <div className="grid grid-cols-3 gap-4 m-auto max-w-2xl">
        {data.map(workout => {
          return (
            <Link
              key={workout.slug}
              href={`/workouts/${encodeURIComponent(workout.slug)}`}
            >
              <a>
                <h1 className="text-2xl mb-4">{workout.title}</h1>
                <p className="text-sm mb-3">{workout.description}</p>
                <time
                  dateTime={workout.startDate}
                  className="text-lg"
                >
                  {workout.startDate}
                </time>
              </a>
            </Link>
          );
        })}
      </div>
      <Pagination totalCount={totalCount} currentPage={currentPage} />
    </>
  )
}

export default Workouts;
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Pagination } from './pagination';

const Workouts = ({data, totalCount}) => {
  const router = useRouter();
  const currentPage = router.query.page ? parseInt(router.query.page) : 0;
  const currentLimit = router.query.limit ? parseInt(router.query.limit) : 20;
  const filterQuery = {
    startDate: router.query.startDate,
    category: router.query.category
  }

  return (
    <div className="pb-10">
      <div className="grid grid-cols-3 gap-4 m-auto max-w-2xl pb-10 pt-10">
        {data.map(workout => {
          return (
            <Link
              key={workout.slug}
              href={`/workouts/${encodeURIComponent(workout.slug)}`}
            >
              <a className="hover:border-gymondo border-2 transition-all p-2">
                <h1 className="text-2xl mb-4">{workout.title}</h1>
                <p className="text-sm mb-3">{workout.description}</p>
                <p className="text-m mb-3">{workout.category}</p>
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
      {totalCount > 20 && (
        <Pagination 
          totalCount={totalCount}
          currentPage={currentPage}
          currentLimit={currentLimit}
          filterQuery={filterQuery}
        />
      )}
    </div>
  )
}

export default Workouts;
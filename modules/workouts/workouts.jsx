import { useRouter } from 'next/router'
import { Pagination } from './pagination';
import WorkoutTile from './workout-tile';
import WorkoutFilter from './workout-filter';

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
      <WorkoutFilter />
      <div className="grid grid-cols-3 gap-4 m-auto max-w-2xl pb-10">
        {data.map(workout => 
          <WorkoutTile 
            title={workout.title}
            description={workout.description}
            startDate={workout.startDate}
            category={workout.category}
            slug={workout.slug}
            key={workout.id}
          />)}
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
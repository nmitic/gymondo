import Link from 'next/link';

const generatePaginationCount = paginationCount => Array.from({ length: paginationCount }, (_, i) => i + 1);

const Pagination = ({
  totalCount,
  currentLimit,
  currentPage
}) => {
  const activeClassNames = 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600';
  const inactiveClassNames = 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50';
  const paginationCount = Math.round(totalCount / currentLimit);
  const showLeftArrow = currentPage !== 1;
  const showRIghtArrow = currentPage !== paginationCount;

  return (
    <div className="m-auto mt-5 max-w-2xl sticky">
      <div className="bg-white flex items-center justify-between border-gray-200">
        <div>
          <p className="text-sm text-gray-700 mr-3">
            total results <span className="font-bold">{totalCount}</span>
          </p>
        </div>
        {
          showLeftArrow && (
            <Link href={{ pathname: '/workouts', query: { page: currentPage - 1, limit: currentLimit } }}>
              <a aria-current="page" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </Link>
          )
        }
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between overflow-scroll">
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            {
              generatePaginationCount(paginationCount).map((count, index) => {
                const paginationClassName = currentPage === count ? activeClassNames : inactiveClassNames;
                if (count) {
                  return (
                    <Link key={index} href={{ pathname: '/workouts', query: { page: count, limit: currentLimit } }}>
                      <a aria-current="page" className={`${paginationClassName} relative inline-flex items-center px-4 py-2 border text-sm font-medium`}>
                        {count}
                      </a>
                    </Link>
                  )
                } else {
                  return (
                    <span key={index} className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                      ...
                    </span>
                  )
                }
              })
            }
          </nav>
        </div>
        {
          showRIghtArrow && (
            <Link href={{ pathname: '/workouts', query: { page: currentPage + 1, limit: currentLimit } }}>
              <a aria-current="page" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </Link>
          )
        }
      </div>
    </div>

  )
}

export default Pagination;
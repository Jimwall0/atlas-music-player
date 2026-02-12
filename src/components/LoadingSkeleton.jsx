export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse flex flex-col md:flex-row gap-8 w-full p-4">
      {/* Left: Cover and controls skeleton */}
      <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-6">
        <div className="bg-gray-300 dark:bg-gray-700 rounded-lg h-64 w-full mb-6" />
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-2/3 mb-2" />
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-6" />
        <div className="flex items-center space-x-6 mb-6">
          <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-12 w-12 bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded" />
        </div>
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-full" />
      </div>
      {/* Right: Playlist skeleton */}
      <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-6">
        <div className="h-7 w-32 bg-gray-300 dark:bg-gray-700 rounded mb-6" />
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="flex items-center justify-between mb-4">
            <div>
              <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded mb-2" />
              <div className="h-3 w-20 bg-gray-300 dark:bg-gray-700 rounded" />
            </div>
            <div className="h-4 w-10 bg-gray-300 dark:bg-gray-700 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
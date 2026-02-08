const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-slate-900">
      <div className="text-center">
        <div className="spinner mx-auto mb-4"></div>
        <p className="text-slate-600 dark:text-slate-400">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;

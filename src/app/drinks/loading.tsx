const loading = () => {
  return (
    <div className="h-full flex items-center justify-center ">
      <div className="p-4">
        <span className="loading loading-spinner text-info loading-lg"></span>
        <span className="loading loading-spinner text-success loading-lg"></span>
        <span className="loading loading-spinner text-warning loading-lg"></span>
      </div>
    </div>
  );
}

export default loading;

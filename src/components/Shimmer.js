const Shimmer = () => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-yellow-50 h-76" data-testid="shimmer">
      {Array(12)
        .fill(" ")
        .map((e, index) => (
          <div key={index} className="bg-green-200 h-76 shadow-lg"></div>
        ))}
    </div>
  );
};

export default Shimmer;

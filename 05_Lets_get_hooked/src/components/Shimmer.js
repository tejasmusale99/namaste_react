const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-img"></div>
            <div className="shimmer-title"></div>
            <div className="shimmer-cuisines"></div>
            <div className="shimmer-details"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;

const JobCard = (props) => {
  return (
    <>
      <div className="job-card mx-auto bg-white drop-shadow-sm mt-6 rounded-md mb-6">
        {props.children}
      </div>
    </>
  );
};

export default JobCard;

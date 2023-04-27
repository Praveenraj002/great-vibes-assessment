const JobButtonTwo = (props) => {
  return (
    <div>
      <button className="jobCard-btn bg-white px-4 py-2 text-primaryBlueGv border-solid border-1 border-primaryBlueGv rounded-md">
        {props.children}
      </button>
    </div>
  );
};

export default JobButtonTwo;

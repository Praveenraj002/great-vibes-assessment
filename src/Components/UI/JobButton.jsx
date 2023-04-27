const JobButton = (props) => {
  return (
    <div>
      <button className=" jobCard-btn bg-primaryBlueGv px-4 py-2 text-white rounded-md">
        {props.children}
      </button>
    </div>
  );
};

export default JobButton;

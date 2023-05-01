const MainButton = (props) => {
  return (
    <div className="flex flex-row justify-center">
      <button
        onClick={props.onClick}
        className="bg-primaryBlueGv text-white text-center rounded-md px-4 py-2 m-4"
      >
        {props.children}
      </button>
    </div>
  );
};

export default MainButton;

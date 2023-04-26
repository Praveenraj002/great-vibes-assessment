const Button = (props) => {
  return (
    <div className="flex flex-row justify-end">
      <button className="bg-primaryBlueGv text-white text-center rounded-md px-4 py-2">
        {props.children}
      </button>
    </div>
  );
};

export default Button;

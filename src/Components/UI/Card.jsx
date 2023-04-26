const Card = (props) => {
  return (
    <>
      <div className="card mx-auto bg-white drop-shadow-sm p-8 mt-6 rounded-md mb-6">{props.children}</div>
    </>
  );
};

export default Card;

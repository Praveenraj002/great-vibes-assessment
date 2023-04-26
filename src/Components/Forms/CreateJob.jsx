import React, { useState } from "react";
import FormOne from "./FormOne";
import Card from "../UI/Card";
import FormTwo from "./FormTwo";

const CreateJob = (props) => {
  const [showContentsOne, setShowContentsOne] = useState(true);

  const submitHandler = () => {
    setShowContentsOne(false);
  };

  return (
    <>
      <Card>
        {showContentsOne ? <FormOne onSubmit={submitHandler} /> : <FormTwo />}
      </Card>
    </>
  );
};

export default CreateJob;

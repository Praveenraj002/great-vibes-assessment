import React, { useState } from "react";
import FormOne from "./FormOne";
import Card from "../UI/Card";
import FormTwo from "./FormTwo";

const CreateJob = (props) => {
  // Using React UseState
  const [showContentsOne, setShowContentsOne] = useState(true);

  // Function for submitting the form 1
  const submitHandler = () => {
    setShowContentsOne(false);
  };

  return (
    <>
      <Card>
        {/* Logic behind submitting the form 1 ie. (Step 1) */}
        {showContentsOne ? <FormOne onSubmit={submitHandler} /> : <FormTwo />}
      </Card>
    </>
  );
};

export default CreateJob;

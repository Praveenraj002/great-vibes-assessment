import React, { useState } from "react";
import FormOne from "./FormOne";
import Card from "../UI/Card";
import FormTwo from "./FormTwo";
import MainButton from "../UI/mainButton";

const CreateJob = (props) => {
  // Using React UseState (Form Pop Up)
  const [showForm, setShowForm] = useState(true);
  // Using React UseState (Steps 1 & Step 2)
  const [showContents, setShowContents] = useState(true);

  // Function for Form Pop Up
  const onClick = () => {
    setShowForm(false);
  };

  // Function for submitting the form 1
  const submitHandler = () => {
    setShowContents(false);
  };

  return (
    <>
      {showForm ? (
        <MainButton onClick={onClick}>Create Job</MainButton>
      ) : (
        <Card>
          {/* Logic behind submitting the form 1 ie. (Step 1) */}
          {showContents ? <FormOne onSubmit={submitHandler} /> : <FormTwo />}
        </Card>
      )}
    </>
  );
};

export default CreateJob;

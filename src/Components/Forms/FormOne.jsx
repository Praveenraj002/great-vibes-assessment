import React, { useRef } from "react";
import FormTitleOne from "./FormTitleOne";
import Button from "../UI/Button";

// Form 1 which client witnesses when opening the website initially.
const FormOne = (props) => {
  // Using React Refs (Reference)
  const jobTitleInputRef = useRef();
  const companyNameInputRef = useRef();
  const industryInputRef = useRef();
  const locationInputRef = useRef();
  const remoteTypeInputRef = useRef();

  const onNextHandler = () => {
    // Input data collected here
    const enteredJobTitle = jobTitleInputRef.current.value;
    const enteredCompanyName = companyNameInputRef.current.value;
    const enteredIndustry = industryInputRef.current.value;
    const enteredLocation = locationInputRef.current.value;
    const enteredRemoteType = remoteTypeInputRef.current.value;

    // Form validation
    if (
      enteredJobTitle.trim().length === 0 ||
      enteredCompanyName.trim().length === 0 ||
      enteredIndustry.trim().length === 0 ||
      enteredLocation.trim().length === 0 ||
      enteredRemoteType.trim().length === 0
    ) {
      alert(
        "Invalid Input: Please enter non empty values and please reload the page to start with step 1"
      );
    } else {
      // Logging Inputs from the form
      console.log(enteredJobTitle);
      console.log(enteredCompanyName);
      console.log(enteredIndustry);
      console.log(enteredLocation);
      console.log(enteredRemoteType);
    }
  };

  return (
    <form onSubmit={props.onSubmit}>
      <FormTitleOne />
      {/* Job Title */}
      <div className="flex flex-col mb-6">
        <label htmlFor="jobTitle" className="card-text font-semibold">
          Job title<span className="text-errorRedFontGv">*</span>
        </label>
        <input
          className="card-text border border-placeholderBorderColorGvGv py-2 px-3 rounded-md focus:outline-none mt-1"
          ref={jobTitleInputRef}
          id="jobTitle"
          type="text"
          placeholder="ex. UX UI Designer"
        />
      </div>

      {/* Company Name */}
      <div className="flex flex-col mb-6">
        <label htmlFor="companyName" className="card-text font-semibold">
          Company name<span className="text-errorRedFontGv">*</span>
        </label>
        <input
          className="card-text border border-placeholderBorderColorGvGv py-2 px-3 rounded-md focus:outline-none mt-1"
          ref={companyNameInputRef}
          id="companyName"
          type="text"
          placeholder="ex. Google"
        />
      </div>

      {/* Industry */}
      <div className="flex flex-col mb-6">
        <label htmlFor="industry" className="card-text font-semibold">
          Industry<span className="text-errorRedFontGv">*</span>
        </label>
        <input
          className="card-text border border-placeholderBorderColorGvGv py-2 px-3 rounded-md focus:outline-none mt-1"
          ref={industryInputRef}
          id="industry"
          type="text"
          placeholder="ex. Information Technology"
        />
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          {/* Location */}
          <label htmlFor="location" className="card-text font-semibold">
            Location
          </label>
          <input
            className="card-text border border-placeholderBorderColorGvGv py-2 px-3 rounded-md focus:outline-none mt-1 w-full"
            ref={locationInputRef}
            id="location"
            type="text"
            placeholder=" ex. Chennai"
          />
        </div>

        {/* Remote Type */}
        <div className="flex flex-col">
          <label htmlFor="remote-type" className="card-text font-semibold">
            Remote type
          </label>
          <input
            className="card-text border border-placeholderBorderColorGvGv py-2 px-3 rounded-md focus:outline-none mt-1 mb-24 w-full"
            ref={remoteTypeInputRef}
            id="remote-type"
            type="text"
            placeholder=" ex. In-office"
          />
        </div>
      </div>
      {/* Next button with onNext handler function */}
      <Button onNext={onNextHandler}>Next</Button>
    </form>
  );
};

export default FormOne;

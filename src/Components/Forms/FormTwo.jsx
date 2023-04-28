import React, { useRef } from "react";
import FormTitleTwo from "./FormTitleTwo";
import Button from "../UI/Button";

const FormTwo = (props) => {
  const experienceInputMinRef = useRef();
  const experienceInputMaxRef = useRef();
  const salaryInputMinRef = useRef();
  const salaryInputMaxRef = useRef();
  const totalEmployeeInputRef = useRef();
  const quickApplyInputRef = useRef();
  const externalApplyInputRef = useRef();

  // On save Button clicked
  const onSaveHandler = (event) => {
    event.preventDefault();
    let enteredExperienceMin = experienceInputMinRef.current.value;
    let enteredExperienceMax = experienceInputMaxRef.current.value;
    let enteredSalaryMin = salaryInputMinRef.current.value;
    let enteredSalaryMax = salaryInputMaxRef.current.value;
    let enteredTotalEmployee = totalEmployeeInputRef.current.value;
    let enteredQuickApply = quickApplyInputRef.current.value;
    let enteredExternalApply = externalApplyInputRef.current.value;

    // Logging the Input data
    console.log(enteredExperienceMin);
    console.log(enteredExperienceMax);
    console.log(enteredSalaryMin);
    console.log(enteredSalaryMax);
    console.log(enteredTotalEmployee);
    console.log(enteredQuickApply);
    console.log(enteredExternalApply);

    // Clearing the Input field
    experienceInputMinRef.current.value = "";
    experienceInputMaxRef.current.value = "";
    salaryInputMinRef.current.value = "";
    salaryInputMaxRef.current.value = "";
    totalEmployeeInputRef.current.value = "";
    quickApplyInputRef.current.value = "";
    externalApplyInputRef.current.value = "";
  };

  return (
    <form onSubmit={onSaveHandler}>
      <FormTitleTwo />
      {/* Experience */}
      <div className="flex flex-col mb-6">
        <label htmlFor="experience" className="card-text font-semibold">
          Experience
        </label>
        <div className="flex flex-row gap-6">
          <input
            className="card-text border border-placeholderBorderColorGvGv py-2 px-3 rounded-md focus:outline-none mt-1 w-full"
            ref={experienceInputMinRef}
            id="experience"
            type="text"
            placeholder="Minimum"
          />
          <input
            className="card-text border border-placeholderBorderColorGvGv py-2 px-3 rounded-md focus:outline-none mt-1 w-full"
            ref={experienceInputMaxRef}
            id="experience"
            type="text"
            placeholder="Maximum"
          />
        </div>
      </div>

      {/* Salary */}
      <div className="flex flex-col mb-6">
        <label htmlFor="salary" className="card-text font-semibold">
          Salary
        </label>
        <div className="flex flex-row gap-6">
          <input
            className="card-text border border-placeholderBorderColorGvGv py-2 px-3 rounded-md focus:outline-none mt-1 w-full"
            ref={salaryInputMinRef}
            id="salary"
            type="text"
            placeholder="Minimum"
          />
          <input
            className="card-text border border-placeholderBorderColorGvGv py-2 px-3 rounded-md focus:outline-none mt-1 w-full"
            ref={salaryInputMaxRef}
            id="salary"
            type="text"
            placeholder="Maximum"
          />
        </div>
      </div>

      {/* Total Employee */}
      <div className="flex flex-col mb-6">
        <label htmlFor="total-employee" className="card-text font-semibold">
          Total Employee
        </label>
        <input
          className="card-text border border-placeholderBorderColorGvGv py-2 px-3 rounded-md focus:outline-none mt-1"
          ref={totalEmployeeInputRef}
          id="total-employee"
          type="text"
          placeholder="ex. 100"
        />
      </div>

      {/* Apply Type */}
      <div className="flex flex-col mb-4">
        <p className="card-text font-semibold">Apply type</p>
        <div className="flex flex-row-reverse gap-4 justify-end mt-1">
          <div className="flex flex-row gap-1">
            <input
              className="radio-btn border border-placeholderBorderColorGvGv mt-1"
              ref={externalApplyInputRef}
              id="external"
              name="apply"
              type="radio"
              value="External apply"
            />
            <label htmlFor="external" className="radio-text mt-1">
              External apply
            </label>
          </div>
          <div className="flex flex-row items-start gap-1">
            <input
              className="radio-btn border border-placeholderBorderColorGvGv mt-1 mb-24"
              ref={quickApplyInputRef}
              id="quick"
              name="apply"
              type="radio"
              value="Quick apply"
            />
            <label htmlFor="quick" className="radio-text mt-1">
              Quick apply
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end">
        <Button>Save</Button>
      </div>
    </form>
  );
};

export default FormTwo;

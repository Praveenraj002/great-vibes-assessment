import React, { useRef } from "react";
import FormTitleTwo from "./FormTitleTwo";

const FormTwo = (props) => {
  const experienceInputMinRef = useRef();
  const experienceInputMaxRef = useRef();
  const salaryInputMinRef = useRef();
  const salaryInputMaxRef = useRef();
  const totalEmployeeInputRef = useRef();
  const quickApplyInputRef = useRef();
  const externalApplyInputRef = useRef();

  const onSaveHandler = (event) => {
    event.preventDefault();
    let enteredExperienceMin = experienceInputMinRef.current.value;
    let enteredExperienceMax = experienceInputMaxRef.current.value;
    let enteredSalaryMin = salaryInputMinRef.current.value;
    let enteredSalaryMax = salaryInputMaxRef.current.value;
    let enteredTotalEmployee = totalEmployeeInputRef.current.value;
    let enteredQuickApply = quickApplyInputRef.current.value;
    let enteredExternalApply = externalApplyInputRef.current.value;

    console.log(enteredExperienceMin);
    console.log(enteredExperienceMax);
    console.log(enteredSalaryMin);
    console.log(enteredSalaryMax);
    console.log(enteredTotalEmployee);
    console.log(enteredQuickApply);
    console.log(enteredExternalApply);
  };

  return (
    <form>
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
      <div className="flex flex-col mb-6">
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
        <button
          onClick={onSaveHandler}
          className="bg-primaryBlueGv text-white text-center rounded-md px-4 py-2"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default FormTwo;

import Button from "../UI/Button";
import FormTitleTwo from "./FormTitleTwo";

const FormTwo = () => {
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
            id="experience"
            type="text"
            placeholder="Minimum"
          />
          <input
            className="card-text border border-placeholderBorderColorGvGv py-2 px-3 rounded-md focus:outline-none mt-1 w-full"
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
            id="salary"
            type="text"
            placeholder="Minimum"
          />
          <input
            className="card-text border border-placeholderBorderColorGvGv py-2 px-3 rounded-md focus:outline-none mt-1 w-full"
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
          id="total-employee"
          type="text"
          placeholder="ex. 100"
        />
      </div>

      {/* Apply Type */}
      <div className="flex flex-col mb-6">
        <label htmlFor="apply-type" className="card-text font-semibold">
          Apply type
        </label>
        <div className="flex flex-row-reverse gap-4 justify-end mt-1">
          <div className="flex flex-row-reverse gap-1">
            <p className="radio-text mt-1">External apply</p>
            <input
              className="radio-btn border border-placeholderBorderColorGvGv align-middle mt-1"
              id="apply-type"
              type="radio"
            />
          </div>
          <div className="flex flex-row-reverse items-start gap-1">
            <p className="radio-text mt-1">Quick apply</p>
            <input
              className="radio-btn border border-placeholderBorderColorGvGv mt-1 mb-24"
              id="apply-type"
              type="radio"
            />
          </div>
        </div>
      </div>
      <Button>Save</Button>
    </form>
  );
};

export default FormTwo;

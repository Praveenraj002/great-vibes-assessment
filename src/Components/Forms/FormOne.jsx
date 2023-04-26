import FormTitleOne from "./FormTitleOne";
import Button from "../UI/Button";

const FormOne = (props) => {
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
            id="remote-type"
            type="text"
            placeholder=" ex. In-office"
          />
        </div>
      </div>
      <Button>Next</Button>
    </form>
  );
};

export default FormOne;

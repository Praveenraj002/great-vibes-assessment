import JobCard from "../UI/JobCard";
import JobButton from "../UI/JobButton";
import JobButtonTwo from "../UI/JobButtonTwo";

const JobContent = (props) => {
  return (
    <JobCard>
      <div className="py-4 px-6">
        <div className="flex flex-row gap-2">
          {/* Netflix Image */}
          <img
            src="https://duet-cdn.vox-cdn.com/thumbor/0x0:3151x2048/640x427/filters:focal(1575x1024:1576x1025):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png"
            alt=""
            className="w-12 h-12 rounded-md"
          />
          <div className="flex flex-col">
            {/* Job Title */}
            <p className="text-2xl">{props.jobTitle}</p>
            <p className="text-{16px}">
              {/* Company Name and Industry */}
              {props.companyName} - {props.industry}
            </p>
            <p className="text-{16px} text-placeholderGreyGv mb-6">
              {/* Location and remote Type */}
              {props.location} ({props.remoteType})
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-{16px}">Part-Time(9.00 am - 5.00 pm IST)</p>
              <p className="text-{16px}">
                {/* Minimum Experience and Maximum Experience */}
                Experience ({props.minExperience} - {props.maxExperience} years)
              </p>
              <p className="text-{16px}">
                {/* Mnimum Salary and Maximum salary */}
                INR (₹) {props.minSalary} - {props.maxSalary} / Month
              </p>
              {/* Total Employees */}
              <p className="text-{16px}">{props.totalEmployees} employees</p>
            </div>
            <div className="flex flex-row gap-2 mt-6">
              {/* Two Job Card Bottom Buttons */}
              <JobButton>Apply Now</JobButton>
              <JobButtonTwo>External Apply</JobButtonTwo>
            </div>
          </div>
        </div>
      </div>
    </JobCard>
  );
};

export default JobContent;

import CreateJob from "./Components/Forms/CreateJob";
import JobContent from "./Components/Jobs/JobsContent";

const DUMMY_JOB_DETAILS = [
  {
    id: "j1",
    jobTitle: "UX UI Designer",
    companyName: "Great Vibes",
    industry: "Information Technology",
    location: "Chennai, Tamilnadu, India",
    remoteType: "In-office",
    minExperience: "1",
    maxExperience: "2",
    minSalary: "30,000",
    maxSalary: "50,000",
    totalEmployees: "51-200",
  },

  {
    id: "j2",
    jobTitle: "Developer",
    companyName: "Great Vibes",
    industry: "Information Technology",
    location: "Chennai, Tamilnadu, India",
    remoteType: "In-office",
    minExperience: "1",
    maxExperience: "2",
    minSalary: "50,000",
    maxSalary: "70,000",
    totalEmployees: "51-200",
  },

  {
    id: "j3",
    jobTitle: "Interaction Designer",
    companyName: "Great Vibes",
    industry: "Information Technology",
    location: "Chennai, Tamilnadu, India",
    remoteType: "In-office",
    minExperience: "1",
    maxExperience: "2",
    minSalary: "30,000",
    maxSalary: "50,000",
    totalEmployees: "51-200",
  },

  {
    id: "j4",
    jobTitle: "SEO Analyst",
    companyName: "Great Vibes",
    industry: "Information Technology",
    location: "Chennai, Tamilnadu, India",
    remoteType: "In-office",
    minExperience: "1",
    maxExperience: "2",
    minSalary: "30,000",
    maxSalary: "50,000",
    totalEmployees: "51-200",
  },
];

const App = () => {
  return (
    <div>
      <CreateJob />
      <div className="flex flex-row flex-wrap gap-6 m-10">
        <JobContent
          jobTitle={DUMMY_JOB_DETAILS[0].jobTitle}
          companyName={DUMMY_JOB_DETAILS[0].companyName}
          industry={DUMMY_JOB_DETAILS[0].industry}
          location={DUMMY_JOB_DETAILS[0].location}
          remoteType={DUMMY_JOB_DETAILS[0].remoteType}
          minExperience={DUMMY_JOB_DETAILS[0].minExperience}
          maxExperience={DUMMY_JOB_DETAILS[0].maxExperience}
          minSalary={DUMMY_JOB_DETAILS[0].minSalary}
          maxSalary={DUMMY_JOB_DETAILS[0].maxSalary}
          totalEmployees={DUMMY_JOB_DETAILS[0].totalEmployees}
        />

        <JobContent
          jobTitle={DUMMY_JOB_DETAILS[1].jobTitle}
          companyName={DUMMY_JOB_DETAILS[1].companyName}
          industry={DUMMY_JOB_DETAILS[1].industry}
          location={DUMMY_JOB_DETAILS[1].location}
          remoteType={DUMMY_JOB_DETAILS[1].remoteType}
          minExperience={DUMMY_JOB_DETAILS[1].minExperience}
          maxExperience={DUMMY_JOB_DETAILS[1].maxExperience}
          minSalary={DUMMY_JOB_DETAILS[1].minSalary}
          maxSalary={DUMMY_JOB_DETAILS[1].maxSalary}
          totalEmployees={DUMMY_JOB_DETAILS[1].totalEmployees}
        />

        <JobContent
          jobTitle={DUMMY_JOB_DETAILS[2].jobTitle}
          companyName={DUMMY_JOB_DETAILS[2].companyName}
          industry={DUMMY_JOB_DETAILS[2].industry}
          location={DUMMY_JOB_DETAILS[2].location}
          remoteType={DUMMY_JOB_DETAILS[2].remoteType}
          minExperience={DUMMY_JOB_DETAILS[2].minExperience}
          maxExperience={DUMMY_JOB_DETAILS[2].maxExperience}
          minSalary={DUMMY_JOB_DETAILS[2].minSalary}
          maxSalary={DUMMY_JOB_DETAILS[2].maxSalary}
          totalEmployees={DUMMY_JOB_DETAILS[2].totalEmployees}
        />

        <JobContent
          jobTitle={DUMMY_JOB_DETAILS[3].jobTitle}
          companyName={DUMMY_JOB_DETAILS[3].companyName}
          industry={DUMMY_JOB_DETAILS[3].industry}
          location={DUMMY_JOB_DETAILS[3].location}
          remoteType={DUMMY_JOB_DETAILS[3].remoteType}
          minExperience={DUMMY_JOB_DETAILS[3].minExperience}
          maxExperience={DUMMY_JOB_DETAILS[3].maxExperience}
          minSalary={DUMMY_JOB_DETAILS[3].minSalary}
          maxSalary={DUMMY_JOB_DETAILS[3].maxSalary}
          totalEmployees={DUMMY_JOB_DETAILS[3].totalEmployees}
        />
      </div>
    </div>
  );
};

export default App;

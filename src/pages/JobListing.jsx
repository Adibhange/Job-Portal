import { useEffect } from "react";
import { getJobs } from "../api/jobsApi";
import useFetch from "../hooks/useFetch";

const JobListing = () => {
  const {
    fn: fnJobs,
    data: dataJobs,
    loading: dataLoading,
  } = useFetch(getJobs, {});
  console.log(dataJobs);

  useEffect(() => {
    fnJobs();
  }, []);

  return (
    <div>
      JobListing <p></p>
    </div>
  );
};

export default JobListing;

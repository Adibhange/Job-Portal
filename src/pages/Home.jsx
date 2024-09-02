import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

const Home = () => {
  return (
    <section className="flex flex-col gap-10 py-10 sm:gap-20 sm:py-20">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="gradient-title flex flex-col items-center justify-center text-4xl font-extrabold tracking-tighter sm:text-6xl lg:text-8xl">
          Find Your Dream Job
          <span className="flex items-center gap-2 sm:gap-6">
            and get
            <img src="/logo.png" alt="Logo" className="h-14 sm:h-24 lg:h-32" />
          </span>
        </h1>
        <p className="text-xs text-gray-300 sm:mt-4 sm:text-xl">
          Discover thousands of job opportunities or find the ideal candidate
          with ease
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <Link to="/jobs">
            <Button variant="blue" size="xl">
              Find Job
            </Button>
          </Link>
          <Link to="/post-job">
            <Button variant="destructive" size="xl">
              Post Job
            </Button>
          </Link>
        </div>
      </section>

      {/* Carousel */}
      <section></section>

      {/* Banner */}
      <section></section>

      {/* Card */}
      <section></section>

      {/* Accordian */}
      <section></section>
    </section>
  );
};

export default Home;

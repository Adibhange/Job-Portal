import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Companies from "../data/companies.json";

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
      <section>
        <Carousel
          plugins={[Autoplay({ delay: 3000 })]}
          opts={{ loop: true }}
          className="w-full py-10"
        >
          <CarouselContent className="flex items-center gap-5 sm:gap-20">
            {Companies.map(({ name, id, path }) => {
              return (
                <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                  <img
                    src={path}
                    alt={name}
                    className="h-9 object-contain sm:h-14"
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </section>

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

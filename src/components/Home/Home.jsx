import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ServiceCard from "../ServiceCard/ServiceCard";
import ReviewData from "./../ReviewData/ReviewData";

const Home = () => {
  const services = useLoaderData();
  console.log(services);
  const { ServicesData, ReviewsData } = services;

  return (
    <div>
      <Banner></Banner>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6  mt-10 ">
        {ServicesData.slice(0, 4).map((service) => (
          // eslint-disable-next-line react/jsx-key
          <ServiceCard service={service}></ServiceCard>
        ))}
      </div>
      <button className="flex btn bg-blue-500 p-4 mx-auto text-white font-semibold hover:text-blue-700 mt-4 hover:bg-blue-400">
        <NavLink to="/all-treatments">Show More</NavLink>
      </button>

      <ReviewData ReviewsData={ReviewsData}></ReviewData>
    </div>
  );
};

export default Home;

import { useLoaderData } from "react-router-dom";
import ServiceCard from "./../ServiceCard/ServiceCard";

const AllTreatments = () => {
  const services = useLoaderData();
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 w-[80%] mx-auto max-w-[1200px] mt-6">
      {services.map((service) => (
        // eslint-disable-next-line react/jsx-key
        <ServiceCard service={service}></ServiceCard>
      ))}
    </div>
  );
};

export default AllTreatments;

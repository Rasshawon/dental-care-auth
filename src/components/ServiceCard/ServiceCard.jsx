/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
const ServiceCard = ({ service }) => {
  console.log(service);
  const { treatment_name, image, description, cost, id } = service;
  return (
    <div className="card bg-base-100 w-fit shadow-xl ">
      <figure>
        <img className="rounded-lg" src={image} alt="img" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {treatment_name}
          <div className="badge font-semibold text-lg bg-blue-500 text-white hover:bg-white  hover:text-blue-700 border-none">
            ${cost}
          </div>
        </h2>
        <p title={description}>{description}</p>
        <div className="card-actions justify-end">
          <button className="badge badge-outline p-4 bg-blue-500 text-white font-semibold text-lg">
            <NavLink to={`/details/${id}`}>Checkout More</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

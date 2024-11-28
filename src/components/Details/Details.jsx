import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "../Modal/Modal";
import { authContext } from "./../AuthProvider/AuthProvider";

const Details = () => {
  const { treatment_name, image, description } = useLoaderData();
  const contextValue = useContext(authContext);
  console.log(contextValue);

  return (
    <div>
      <div
        className="hero min-h-screen  w-[80%] mx-auto"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{treatment_name}</h1>
            <p className="mb-5">{description}</p>
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="btn font-semibold text-lg bg-blue-600 text-white hover:text-blue-700 border-none"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
      <Modal treatment_name={treatment_name}></Modal>
    </div>
  );
};

export default Details;

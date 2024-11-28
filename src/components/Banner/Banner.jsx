import { NavLink } from "react-router-dom";
const Banner = () => {
  return (
    <div className="hero bg-base-200 w-[80%] mx-auto max-w-[1200px] rounded-lg mt-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_y8YlwNPImD3YCbDKKgIBG0SoEHqOlWp-reYgvVyfIhTCyw_HaOts3Y9onSfeVair5Bc&usqp=CAU"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="mr-6">
          <h1 className="text-4xl font-bold text-cyan-600">
            Your Smile, Our Priority.
          </h1>
          <p className="py-4 text-md font-semibold">
            Healthy Smile, Happy Life. Book Your Appointment Today!
          </p>
          <button className="btn font-semibold text-lg bg-blue-500 text-white hover:text-blue-700 border-none">
            <NavLink to="/my-appointment">Book Now</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

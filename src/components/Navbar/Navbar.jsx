import { useContext } from "react";

import { NavLink } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import "./Navbar.css";

const Navbar = () => {
  const { user, handleLogOut } = useContext(authContext);
  return (
    <div className="flex  md:min-h-20 bg-blue-500 justify-between items-center ">
      <div className="ml-4">
        <NavLink to="/">
          {" "}
          <h2 className="font-bold text-gray-800 hover:text-gray-300 text-2xl">
            TEETH TREATMENT
          </h2>
        </NavLink>
      </div>
      <div className="flex  gap-4 text-gray-800 font-semibold">
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <div>
          <NavLink to="/all-treatments">All Treatments</NavLink>
        </div>
        <div>
          <NavLink to="/my-appointment">My Appointment</NavLink>
        </div>
        <div>
          <NavLink to="/profile">Profile</NavLink>
        </div>
      </div>

      <div>
        {user?.email ? (
          <div>
            <img src={user.photoURL} alt="img" />
            <button
              className="btn font-semibold text-lg bg-blue-600 text-white hover:text-blue-700 border-none mr-4"
              onClick={handleLogOut}
            >
              logout
            </button>
          </div>
        ) : (
          <NavLink to="/login">
            <button className="btn font-semibold text-lg bg-blue-600 text-white hover:text-blue-700 border-none mr-4">
              Login
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;

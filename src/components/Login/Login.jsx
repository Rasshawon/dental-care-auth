/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { handleGoogleLogin, handleLogin } = useContext(authContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    handleLogin(email, password)
      .then((res) => {
        navigate(location.state.from);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const googleLogingHandler = () => {
    handleGoogleLogin().then((res) => {
      navigate(location.state.from);
    });
  };
  return (
    <div>
      <div className="py-8">
        <form
          className="border-2 border-blue-600 p-4 rounded-2xl"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-2 items-center mb-2">
            <h3 className="font-semibold">Email</h3>
            <input
              name="email"
              type="text"
              placeholder="Enter Your Email"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>
          <div className="flex gap-2 items-center mb-2">
            <h3 className="font-semibold">Password</h3>
            <input
              name="password"
              type="text"
              placeholder="Enter Your Password"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>

          <button
            className="btn font-semibold text-lg bg-blue-600 border-none text-white hover:text-blue-700 ml-2 "
            type="submit"
          >
            Login
          </button>
        </form>
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <button className="mr-2" onClick={googleLogingHandler}>
        <div className="flex items-center gap-2 btn font-semibold text-lg bg-blue-600 border-none text-white hover:text-blue-700">
          <FaGoogle /> Google Login
        </div>
      </button>
      New to the Website?{" "}
      <button className="btn font-semibold text-lg bg-blue-600 border-none text-white hover:text-blue-700 ml-2 ">
        <NavLink to="/register">Register</NavLink>
      </button>
    </div>
  );
};

export default Login;

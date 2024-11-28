/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
const Register = () => {
  const { handleRegister, manageProfile } = useContext(authContext);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const cpassword = e.target.cpassword.value;
    if (password.length < 6) {
      setError("password must contain six letter");
    }
    if (password !== cpassword) {
      setError("passwords didn't match");
      return;
    }
    if (/[a-z]/.test(password)) {
      setError("password must contain at least one lowercase Letter");
      return;
    }
    if (/[A-Z]/.test(password)) {
      setError("password must contain at least one lowercase Letter");
      return;
    }

    console.log(name, photo, email, password, cpassword);
    handleRegister(email, password).then((res) => {
      manageProfile(name, photo);
    });
  };

  return (
    <div className="py-8">
      <form
        className="border-2 border-blue-600 p-4 rounded-2xl"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-2 items-center mb-2">
          <h3 className="font-semibold">Name</h3>
          <input
            required
            name="name"
            type="text"
            placeholder="Enter Your Name"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div className="flex gap-2 items-center mb-2">
          <h3 className="font-semibold">Image</h3>
          <input
            required
            name="photo"
            type="text"
            placeholder="Paste Photo Url"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div className="flex gap-2 items-center mb-2">
          <h3 className="font-semibold">Email</h3>
          <input
            required
            name="email"
            type="text"
            placeholder="Enter Your Email"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div className="flex gap-2 items-center mb-2">
          <h3 className="font-semibold">Password</h3>
          <input
            required
            name="password"
            type="text"
            placeholder="Enter Your Password"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div className="flex gap-2 items-center mb-2">
          <h3 className="font-semibold">Confirm Password</h3>
          <input
            required
            name="cpassword"
            type="text"
            placeholder="Enter Your Name"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <button
          className="btn font-semibold text-lg bg-blue-600 border-none text-white hover:text-blue-700  "
          type="submit"
        >
          Register
        </button>{" "}
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Register;

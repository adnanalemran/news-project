import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const name = form.get("name");
    const photo = form.get("photo");
    const password = form.get("password");
    console.log(email, password, name, photo);

    //create user
    createUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="font-poppins">
        <Navbar />
        <h2
          className="text-center text-3xl"
          tabIndex="0"
          aria-label="Register page"
        >
          Register page
        </h2>
        <form
          onSubmit={handleRegistration}
          className="card-body md:w-3/4 lg:w-1/2 mx-auto"
        >
          <div className="form-control">
            <label htmlFor="name" className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="input input-bordered"
              name="name"
              required
              aria-required="true"
            />
          </div>
          <div className="form-control">
            <label htmlFor="name" className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Photo Url"
              className="input input-bordered"
              name="photo"
              required
              aria-required="true"
            />
          </div>
          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              name="email"
              required
              aria-required="true"
            />
          </div>
          <div className="form-control">
            <label htmlFor="password" className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              id="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              name="password"
              required
              aria-required="true"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" aria-label="Register">
              Register
            </button>
          </div>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link className="text-blue-400 font-bold" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

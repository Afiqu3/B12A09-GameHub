import React, { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { FiLogIn } from "react-icons/fi";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, user, setLoading, signInWithGoogle, error, setError } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password)
    signInUser(email, password)
      .then((result) => {
        // console.log(result.user);
        navigate(location?.state || "/");
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setError("Invalid Email or Password");
      });
  };
  const handleGoogleLogIn = () => {
    signInWithGoogle()
      .then(() => {
        navigate(location?.state || "/");
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  // useEffect(() => {
  //   if (user) {
  //     navigate("/");
  //   }
  // }, [user, navigate]);

  return (
    <div className="card bg-black text-white w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10">
      <title>Login</title>
      <div className="card-body">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset space-y-3">
            {/* email */}
            <input
              type="email"
              name="email"
              className="input focus:border-transparent text-black w-full"
              placeholder="Email"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input focus:border-transparent text-black w-full"
                placeholder="Password"
              />
              <span
                onClick={handleTogglePassword}
                className="absolute top-3.5 right-2 z-1 cursor-pointer text-black"
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </div>
            <div
            // onClick={handlePasswordReset}
            >
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral">
              {" "}
              <FiLogIn className="text-white" />
              Login
            </button>
          </fieldset>
        </form>
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex justify-between items-center text-white gap-2">
          <div className="h-px border w-1/2"></div>
          <p>or</p>
          <div className="h-px border w-1/2"></div>
        </div>
        <button onClick={handleGoogleLogIn} className="btn btn-neutral mt-2">
          {" "}
          <FcGoogle size={24} />
          Login With Google
        </button>
        <p className="text-center">
          Do not have account? Please{" "}
          <Link
            className="text-blue-500 hover:text-blue-900"
            to={"/register"}
            target="_parent"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

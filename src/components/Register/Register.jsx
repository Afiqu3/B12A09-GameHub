import React, { useContext, useEffect, useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { Bounce, toast } from "react-toastify";

const Register = () => {
  const {
    createUser,
    signInWithGoogle,
    updateUser,
    signOutUser,
    user,
    error,
    setError,
  } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [upper, setUpper] = useState(false);
  const [lower, setLower] = useState(false);
  const [length, setLength] = useState(false);
  const navigate = useNavigate();

  const handlePassOnChange = (e) => {
    const pass = e.target.value;
    const checkUpper = /[A-Z]/;
    const checkLower = /[a-z]/;
    const checkLength = /^.{6,}$/;
    if (checkUpper.test(pass)) {
      setUpper(true);
    } else {
      setUpper(false);
    }
    if (checkLower.test(pass)) {
      setLower(true);
    } else {
      setLower(false);
    }
    if (checkLength.test(pass)) {
      setLength(true);
    } else {
      setLength(false);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    if (!upper) {
      setError("Password must have have an uppercase letter");
      return;
    } else if (!lower) {
      setError("Password must have have an lowercase letter");
      return;
    } else if (!length) {
      setError("Password length must be at least 6 character");
      return;
    }
    setError("");
    createUser(email, password)
      .then(() => {
        // const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            toast.success("Register Successfully!", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });
            signOutUser();
            navigate("/");
          })
          .catch(() => {
            // console.log(error);
          });
      })
      .catch(() => {
        // console.log(error.message);
      });
  };

  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Register Successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        signOutUser();
        // console.log(result.user);
        navigate("/");
      })
      .catch(() => {
        // console.log(error.message);
      });
  };

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <div className="card bg-linear-to-br from-gray-900 via-black to-gray-900 border border-gray-800 text-white w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10">
      <title>Register</title>
      <div className="card-body">
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold bg-linear-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent mb-2">
            Create Account
          </h1>
          <p className="text-gray-400 text-sm">Join us today and get started</p>
        </div>
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            {/* User name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input focus:border-transparent text-black"
              placeholder="Name"
              required
            />
            {/* user photo */}
            <label className="label">Photo URL</label>
            <input
              type="url"
              name="photo"
              className="input focus:border-transparent text-black"
              placeholder="Photo URL"
              required
            />
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input focus:border-transparent text-black"
              placeholder="Email"
              required
            />
            {/* password */}
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handlePassOnChange}
                className="input focus:border-transparent text-black"
                placeholder="Password"
                required
              />
              <span
                onClick={handleTogglePassword}
                className="absolute top-3 right-6 z-1 cursor-pointer text-black"
              >
                {showPassword ? (
                  <FaEyeSlash size={18}></FaEyeSlash>
                ) : (
                  <FaEye size={18}></FaEye>
                )}
              </span>
            </div>
            <div className="mt-3 space-y-1.5 text-sm">
              <div className="flex items-center gap-2">
                {upper ? (
                  <FaCheckCircle
                    className="text-green-500 shrink-0"
                    size={14}
                  />
                ) : (
                  <FaTimesCircle className="text-gray-600 shrink-0" size={14} />
                )}
                <span className={upper ? "text-green-500" : "text-gray-500"}>
                  At least one uppercase letter
                </span>
              </div>
              <div className="flex items-center gap-2">
                {lower ? (
                  <FaCheckCircle
                    className="text-green-500 shrink-0"
                    size={14}
                  />
                ) : (
                  <FaTimesCircle className="text-gray-600 shrink-0" size={14} />
                )}
                <span className={lower ? "text-green-500" : "text-gray-500"}>
                  At least one lowercase letter
                </span>
              </div>
              <div className="flex items-center gap-2">
                {length ? (
                  <FaCheckCircle
                    className="text-green-500 shrink-0"
                    size={14}
                  />
                ) : (
                  <FaTimesCircle className="text-gray-600 shrink-0" size={14} />
                )}
                <span className={length ? "text-green-500" : "text-gray-500"}>
                  Minimum 6 characters
                </span>
              </div>
            </div>
            <button className="btn btn-neutral font-semibold mt-4 bg-linear-to-r from-[#632ee3] to-[#9f62f2] hover:from-[#52057B] hover:to-[#892CDC] transition-all duration-300">
              Register
            </button>
          </fieldset>
        </form>

        {error && <p className="text-red-500">{error}</p>}

        <div className="flex justify-between items-center text-white gap-2">
          <div className="border w-1/2 border-gray-400"></div>
          <p>or</p>
          <div className="border w-1/2 border-gray-400"></div>
        </div>

        <button
          className="btn btn-neutral bg-gray-800/50 hover:bg-gray-800 border text-white font-medium transition-all duration-300"
          onClick={handleGoogleSignUp}
        >
          {" "}
          <FcGoogle size={24} />
          Sign Up With Google
        </button>
        
        <p className="text-center">
          Already Have an account? Please{" "}
          <Link
            className="text-blue-500 hover:text-blue-900"
            to={"/login"}
            target="_parent"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

import React, { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
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
      .then((result) => {
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
          .catch((error) => {
            // console.log(error);
          });
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };

  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then((result) => {
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
      .catch((error) => {
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
    <div className="card bg-black text-white w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10">
      <title>Register</title>
      <div className="card-body">
        <h1 className="text-3xl font-bold">Register now!</h1>
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
                className="absolute top-3.5 right-6 z-1 cursor-pointer text-black"
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </div>
            <p className={`${upper ? "text-green-500" : "text-white/30"}`}>
              Must have an Uppercase letter
            </p>
            <p className={`${lower ? "text-green-500" : "text-white/30"}`}>
              Must have a Lowercase letter
            </p>
            <p className={`${length ? "text-green-500" : "text-white/30"}`}>
              Length must be at least 6 character
            </p>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex justify-between items-center text-white gap-2">
          <div className="h-px border w-1/2"></div>
          <p>or</p>
          <div className="h-px border w-1/2"></div>
        </div>
        <button className="btn btn-neutral mt-2" onClick={handleGoogleSignUp}>
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

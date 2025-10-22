import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
// import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const Register = () => {
//   const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  //   const handleRegister = (e) => {
  //     e.preventDefault();
  //     const email = e.target.email.value;
  //     const password = e.target.password.value;
  //     const terms = e.target.terms.checked;
  //     const name = e.target.name.value;
  //     const photo = e.target.photo.value;
  //     console.log(terms, name, photo);
  //     const lengthPattern = /^.{6,}$/;
  //     if (!lengthPattern.test(password)) {
  //       setError("Password must be at least 6 characters long!");
  //       return;
  //     }
  //     if (!terms) {
  //       setError("Must accept terms and conditions");
  //       return;
  //     }
  //     setError("");
  //     setSuccess(false);
  //     createUserWithEmailAndPassword(auth, email, password)
  //       .then((result) => {
  //         console.log("After register", result.user);
  //         setSuccess(true);
  //         e.target.reset();
  //         const profile = {
  //           displayName: name,
  //           photoURL: photo,
  //         };
  //         updateProfile(result.user, profile).then().catch();
  //         sendEmailVerification(result.user).then(() => {
  //           alert("Please verify your email to login");
  //         });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         setError(error.message);
  //       });
  //   };

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)
    // createUser(email, password)
    //   .then((result) => {
    //     console.log(result.user);
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
  };
  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };
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
            />
            {/* user photo */}
            <label className="label">Photo URL</label>
            <input
              type="url"
              name="photo"
              className="input focus:border-transparent text-black"
              placeholder="Photo URL"
            />
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input focus:border-transparent text-black"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input focus:border-transparent text-black"
                placeholder="Password"
              />
              <span
                onClick={handleTogglePassword}
                className="absolute top-3.5 right-6 z-1 cursor-pointer text-black"
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        <div className="flex justify-between items-center text-white gap-2">
            <div className="h-px border w-1/2"></div>
            <p>or</p>
            <div className="h-px border w-1/2"></div>
        </div>
        <button className="btn btn-neutral mt-2"> <FcGoogle size={24} />Sign Up With Google</button>
        <p className="text-center">
          Already Have an account? Please{" "}
          <Link className="text-blue-500 hover:text-blue-900" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
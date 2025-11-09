import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { Bounce, toast } from "react-toastify";
import { motion } from "motion/react";

const ForgotPasswordForm = () => {
  const location = useLocation();
  const { resetPassword, setLoading } = useContext(AuthContext);
  const [saveEmail, setSaveEmail] = useState("");

  useEffect(() => {
    if (location?.state) {
      setSaveEmail(location.state);
    }
  }, [location.state]);

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent! Redirecting to Gmail...", {
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
        setTimeout(() => {
          window.location.href = "https://mail.google.com";
        }, 2000);
        setLoading(false);
      })
      .catch(() => {
        // console.log(error.message);
      });
  };
  return (
    <div>
      <motion.div
        className="card bg-linear-to-br from-gray-900 via-black to-gray-900 border border-gray-800 text-white w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="card-body">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold bg-linear-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent mb-2">
              Reset Password
            </h1>
            <p className="text-gray-400 text-sm">
              Enter your email to receive a reset link
            </p>
          </div>
          <form onSubmit={handleForgotPassword}>
            <fieldset className="fieldset space-y-3">
              {/* email */}
              <input
                type="email"
                name="email"
                className="input focus:border-transparent text-black w-full"
                placeholder="Email"
                defaultValue={saveEmail}
                required
              />
              <div
              // onClick={handlePasswordReset}
              ></div>
              <button className="btn btn-neutral text-white font-semibold mt-4 bg-linear-to-r from-[#632ee3] to-[#9f62f2] hover:from-[#52057B] hover:to-[#892CDC] transition-all duration-300">
                Reset Password
              </button>
            </fieldset>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPasswordForm;

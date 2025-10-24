import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { Bounce, toast } from "react-toastify";

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
      <div className="card bg-black text-white w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10">
        <div className="card-body">
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
              <button className="btn btn-neutral">Reset Password</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;

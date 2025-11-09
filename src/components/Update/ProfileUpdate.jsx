import React, { useContext } from "react";
import { MdSystemUpdateAlt } from "react-icons/md";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

const ProfileUpdate = () => {
  const { user, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        toast.success("Updated Successfully!", {
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
        navigate("/");
      })
      .catch(() => {
        // console.log(error);
      });
  };
  return (
    <motion.div
      className="card bg-linear-to-br from-gray-900 via-black to-gray-900 border border-gray-800 text-white w-full max-w-sm shrink-0 shadow-2xl mx-auto lg:my-10 md:my-2 my-30"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="card-body relative">

        <img
          className="lg:w-50 lg:h-50 w-40 h-40 rounded-full absolute lg:-top-25 -top-20 lg:left-22 left-18 md:left-27"
          src={user.photoURL}
          alt=""
        />

        <div className="text-center mt-20 mb-6">
          <h1 className="text-4xl font-bold bg-linear-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent mb-2">
            Update Profile
          </h1>
          <p className="text-gray-400 text-sm">
            Manage your account information
          </p>
        </div>

        <form onSubmit={handleUpdate}>
          <fieldset className="fieldset">
            {/* User name */}
            <label className="label">Updated Name</label>
            <input
              type="text"
              name="name"
              className="input focus:border-transparent text-black w-full"
              placeholder={user.displayName}
              required
            />
            {/* user photo */}
            <label className="label">Updated Photo URL</label>
            <input
              type="url"
              name="photo"
              className="input focus:border-transparent text-black w-full"
              placeholder={user.photoURL}
              required
            />
            <button className="btn btn-neutral text-white font-semibold mt-4 bg-linear-to-r from-[#632ee3] to-[#9f62f2] hover:from-[#52057B] hover:to-[#892CDC] transition-all duration-300">
              <MdSystemUpdateAlt className="text-white" /> Update
            </button>
          </fieldset>
        </form>
      </div>
    </motion.div>
  );
};

export default ProfileUpdate;

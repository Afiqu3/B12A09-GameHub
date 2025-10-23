import React, { useContext } from "react";
import { MdSystemUpdateAlt } from "react-icons/md";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router";

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
      .catch((error) => {
        // console.log(error);
      });
  };
  return (
    <div className="card bg-black text-white w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Update Profile</h1>
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
            <button className="btn btn-neutral mt-4">
              <MdSystemUpdateAlt className="text-white" /> Update
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdate;

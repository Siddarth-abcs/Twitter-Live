import React, { useEffect, useState } from "react";
import EditProfile from "../EditProfile/EditProfile";
import useLoggedInUser from "../../../hooks/useLoggedInUser";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import CenterFocusWeakIcon from "@mui/icons-material/CenterFocusWeak";
import axios from "axios";

const Main = () => {
  const [loggedInUser] = useLoggedInUser();
  const [user] = useAuthState(getAuth());
  const [userProfile, setUserProfile] = useState();

  const userEmail = user ? user.email : "";
  const result = userEmail ? userEmail.split("@")[0] : "";

  const userProfilePic =
    loggedInUser?.profilePhoto ||
    "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";
  const userCoverPic =
    loggedInUser?.backgroundPhoto ||
    "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";

  const handleUploadImage = (e, type) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.set("image", image);

    axios
      .post(
        "https://api.imgbb.com/1/upload?key=905f636bec1cfc6d6119fad90c8ecc01",
        formData
      )
      .then((res) => {
        const url = res.data.data.display_url;
        const userData = {
          email: user?.email,
          [type]: url,
        };
        console.log(userData);
        if (url) {
          axios
            .patch(
              `https://twitter-api-taupe.vercel.app/userUpdates/${user?.email}`,
              userData
            )
            .then((res) => console.log(res.data))
            .catch((error) => {
              console.error(error);
              window.alert(error);
            });
        }
      })
      .catch((error) => {
        console.error(error);
        window.alert(error);
      });
  };

  return (
    <div>
      <div className="bg-gray-800 rounded-lg overflow-hidden w-full border-4 border-slate-600">
        <div className="relative">
          <div className="absolute w-full h-full opacity-0 hover:opacity-100">
            <label htmlFor="coverImage" className="cursor-pointer">
              <CenterFocusWeakIcon className="w-5 h-5 text-blue-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </label>
            <input
              type="file"
              id="coverImage"
              className="hidden"
              onChange={(e) => handleUploadImage(e, "backgroundPhoto")}
            />
          </div>
          <div className="56">
            <img
              src={userCoverPic}
              alt="Header Image"
              className="absoluate w-full h-56 object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-16 transform -translate-x-1/2 translate-y-1/2">
            <div className="absolute w-full h-full opacity-0 hover:opacity-100 rounded-full">
              <label htmlFor="profileImage" className="cursor-pointer">
                <CenterFocusWeakIcon className="w-5 h-5 text-blue-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </label>
              <input
                type="file"
                id="profileImage"
                className="hidden"
                onChange={(e) => handleUploadImage(e, "profilePhoto")}
              />
            </div>
            <img
              src={
                loggedInUser.profilePhoto ||
                "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              }
              alt="Profile Image"
              className="w-24 h-24 rounded-full border-4 border-gray-800 object-cover"
            />
          </div>
        </div>
        <div className="w-full flex justify-end">
          <button className="mr-4 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <EditProfile user={user} loggedInUser={loggedInUser}>
              Profile Edit
            </EditProfile>
          </button>
        </div>
        <div className="px-4 pb-8 text-white">
          <h2 className="text-xl font-semibold">
            {loggedInUser.name || result}
          </h2>
          <p className="text-gray-400">@{loggedInUser.username || result}</p>
          <p className="mt-4 text-sm text-gray-400">{loggedInUser.bio} </p>

          <div className="flex justify-between flex-row-reverse">
            <div className="flex items-center justify-center mt-2 text-gray-400">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13h-3v3h-4v-3H7v-4h3V8h4v3h3v4z"></path>
              </svg>
              <a href="https://yogiadityanath.in" className="text-blue-500">
                {loggedInUser.website || "yogiadityanath.in"}
              </a>
            </div>
            <div class="flex items-center justify-center mt-2 text-gray-400">
              <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 7 7 13 7 13s7-6 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9s-1.12 2.5-2.5 2.5z"></path>
              </svg>
              <span>{loggedInUser.location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

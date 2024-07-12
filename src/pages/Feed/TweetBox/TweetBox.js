import React, { useEffect, useState } from "react";
import "./TweetBox.css";
import axios from "axios";
import { Avatar, Button } from "@mui/material";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import useLoggedInUser from "../../../hooks/useLoggedInUser";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

function TweetBox() {
  const [post, setPost] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [loggedInUser] = useLoggedInUser();

  const [user] = useAuthState(getAuth());
  const email = user ? user.email : null;

  const userProfilePic =
    loggedInUser?.profilePhoto ||
    "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";

  useEffect(() => {
    const fetchUserData = async () => {
      if (user && user.providerData && user.providerData.length > 0) {
        if (user.providerData[0].providerId.length == "password") {
          const response = await fetch(
            `https://twitter-api-taupe.vercel.app/loggedInUser?email=${email}`
          );
          const data = await response.json();
          // console.log(data);
          setName(data.name);
          setUserName(data.username);
          setProfilePhoto(data.profilePhoto);
        } else {
          setName(user.displayName);
          setUserName(email?.split("@")[0]);
        }
      }
    };

    if (user) {
      fetchUserData();
    }
  }, [user, email]);

  const handleFile = (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.set("image", image);
    setLoading(true);

    axios
      .post(
        "https://api.imgbb.com/1/upload?key=905f636bec1cfc6d6119fad90c8ecc01",
        formData
      )
      .then((res) => {
        setImageURL(res.data.data.display_url);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleTweet = async (e) => {
    e.preventDefault();

    const userPost = {
      profilePhoto:
        loggedInUser?.profilePhoto ||
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
      post: post,
      photo: imageURL,
      username: username,
      name: name,
      email: email,
    };

    try {
      const response = await axios.post(
        "https://twitter-api-taupe.vercel.app/post",
        userPost
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    setPost("");
    setImageURL("");
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <form onSubmit={handleTweet}>
        <div className="flex items-center">
          <Avatar
            src={loggedInUser.profilePhoto}
            alt="Profile Picture"
            className="w-8 h-8 mr-3 rounded-full"
          />
          <input
            type="text"
            placeholder="What's happening?"
            className="w-full pl-2 py-2 text-gray-700"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between mt-4">
          <label htmlFor="image" className="cursor-pointer">
            {loading ? (
              <p>Uploading image</p>
            ) : (
              <p>
                {imageURL ? (
                  "Image uploaded"
                ) : (
                  <AddPhotoAlternateOutlinedIcon className="w-5 h-5 text-blue-500" />
                )}
              </p>
            )}
          </label>
          <input
            type="file"
            id="image"
            className="hidden"
            onChange={handleFile}
          />
          <div className="border-2 border-black rounded hover:bg-yellow-300">
            <Button type="submit" className="font-bold px-4">
              Tweet
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;

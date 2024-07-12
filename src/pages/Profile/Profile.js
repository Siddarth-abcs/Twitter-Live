import React, { useEffect, useState } from "react";
import Main from "./Main/Main";
import axios from "axios";
import Post from "../Feed/Post/Post";

const Profile = () => {
  const [postdata, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://twitter-api-taupe.vercel.app/post"
        );
        setPostData(res.data);
        // console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [postdata]);

  return (
    <div className="w-full">
      <Main />
      {postdata.map((p, index) => (
        <Post key={index} p={p} />
      ))}
    </div>
  );
};

export default Profile;

import React, { useEffect, useState } from "react";
import TweetBox from "./TweetBox/TweetBox";
import Post from "./Post/Post";
import axios from "axios";

export const Feed = () => {
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

  // console.log(postdata[0]?._id);

  return (
    <div className="">
      <TweetBox />
      {postdata.map((p, index) => (
        <Post key={index} p={p} />
      ))}
    </div>
  );
};

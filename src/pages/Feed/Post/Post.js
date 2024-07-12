import React from "react";
import { Avatar } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

function Post({ p }) {
  const { name, username, photo, post, profilePhoto } = p;
  // console.log(profilePhoto);

  return (
    <div className="flex flex-wrap items-start border-b border-gray-200 pb-10">
      <div className="flex-shrink-0 "></div>
      <div className="flex-1 p-10">
        <div className="flex items-center mb-5">
          <div className="flex items-center justify-center">
            <Avatar src={profilePhoto} />
            {/* <img src={profilePhoto}/> */}
            <h3 className="text-sm font-bold ml-6">
              {name}{" "}
              <span className="text-sm text-gray-600">
                <VerifiedUserIcon className="text-blue-500" /> @{username}
              </span>
            </h3>
          </div>
        </div>
        <div className="mb-6">
          <p className="text-sm">{post}</p>
        </div>
        <img src={photo} alt="" width="500" />
        <div className="flex justify-between pt-10 px-10">
          <ChatBubbleOutlineIcon
            className="text-gray-500 hover:text-blue-500 cursor-pointer"
            fontSize="small"
          />
          <RepeatIcon
            className="text-gray-500 hover:text-blue-500 cursor-pointer"
            fontSize="small"
          />
          <FavoriteBorderIcon
            className="text-gray-500 hover:text-blue-500 cursor-pointer"
            fontSize="small"
          />
          <PublishIcon
            className="text-gray-500 hover:text-blue-500 cursor-pointer"
            fontSize="small"
          />
        </div>
      </div>
    </div>
  );
}

export default Post;

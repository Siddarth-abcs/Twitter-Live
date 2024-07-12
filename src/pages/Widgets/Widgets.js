import React from "react";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="w-full flex-1 min-w-fit-content overflow-y-scroll">
      <div className="widgets__input flex items-center bg-twitter-background p-2 rounded-full mt-4 ml-4">
        <SearchIcon className="widgets__searchIcon text-gray-500" />
        <input
          placeholder="Search Twitter"
          type="text"
          className="bg-twitter-background border-none mt-0"
        />
      </div>

      <div className="widgets__widgetContainer mt-6 ml-4 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold">What's happening</h2>
        <TwitterTweetEmbed tweetId={"1557187138352861186"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 400 }}
        />
      </div>
    </div>
  );
}

export default Widgets;

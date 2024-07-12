import React from "react";
import "./SidebarOptions.css";

const SidebarOptions = ({ text, Icon }) => {
  return (
    <div
      className={`text-2xl font-semibold flex items-center my-1
        hover:text-blue-500 py-2`}
    >
      <Icon />
      <h2 className="ml-2">{text}</h2>
    </div>
  );
};

export default SidebarOptions;

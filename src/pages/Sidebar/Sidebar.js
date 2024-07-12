import TwitterIcon from "@mui/icons-material/Twitter";
import React, { useState } from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreIcon from "@mui/icons-material/More";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DoneIcon from "@mui/icons-material/Done";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Menu, MenuItem, ListItemIcon, Divider } from "@mui/material";
import CustomeLink from "./CustomLink";
import useLoggedInUser from "../../hooks/useLoggedInUser";

export const Sidebar = ({ handleLogout, user }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const [loggedInUser] = useLoggedInUser();

  const userProfilePic = loggedInUser[0]?.profileimage
    ? loggedInUser[0]?.profileimage
    : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const userEmail = user && user[0]?.email;
  const result = userEmail ? userEmail.split("@")[0] : "";

  return (
    <div className="sidebar flex flex-col items-start border-r border-gray-200 flex-[0.3] relative mt-5 pr-5 overflow-y-scroll">
      <TwitterIcon className="text-blue-500 text-[35px] ml-5 mb-2" />
      <CustomeLink to={"/home"}>
        <SidebarOptions active Icon={HomeIcon} text="Home" />
      </CustomeLink>
      <CustomeLink to={"/home/Explore"}>
        <SidebarOptions active Icon={SearchIcon} text="Explore" />
      </CustomeLink>
      <CustomeLink to={"/home/notifications"}>
        <SidebarOptions active Icon={NotificationsIcon} text="Notifications" />
      </CustomeLink>
      <CustomeLink to={"/home/messages"}>
        <SidebarOptions active Icon={MailOutlineIcon} text="Messages" />
      </CustomeLink>
      <CustomeLink to={"/home/bookmarks"}>
        <SidebarOptions active Icon={BookmarkBorderIcon} text="Bookmarks" />
      </CustomeLink>
      <CustomeLink to={"/home/lists"}>
        <SidebarOptions active Icon={ListAltIcon} text="Lists" />
      </CustomeLink>
      <CustomeLink to={"/home/profile"}>
        <SidebarOptions active Icon={PermIdentityIcon} text="Profile" />
      </CustomeLink>
      <CustomeLink to={"/home/more"}>
        <SidebarOptions active Icon={MoreIcon} text="More" />
      </CustomeLink>

      <button className="bg-blue-500 w-full hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-2xl">
        Tweet
      </button>

      <div className="flex items-center mt-10 mb-2 rounded-full p-2">
        <Avatar
          src={
            loggedInUser.profilePhoto ||
            "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
          }
        />
        <div className="ml-2">
          <h4 className="text-sm">{loggedInUser.name || result}</h4>
          <h5 className="opacity-50">@{loggedInUser.username || result}</h5>
        </div>
        <IconButton
          size="small"
          sx={{ ml: 2 }}
          aria-controls={openMenu ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openMenu ? "true" : undefined}
          onClick={handleClick}
        >
          <MoreHorizIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleClose}
        >
          <MenuItem className="flex items-center">
            <Avatar
              src={
                loggedInUser.profilePhoto ||
                "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              }
            />
            <div className="flex items-center justify-between gap-2 ml-2">
              <div>
                <h4 className="text-sm">{loggedInUser.name || result}</h4>
                <h5 className="opacity-50">
                  @{loggedInUser.username || result}
                </h5>
              </div>
              <ListItemIcon>
                <DoneIcon />
              </ListItemIcon>
            </div>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>Add an existing account</MenuItem>
          <MenuItem onClick={handleLogout}>Log out</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

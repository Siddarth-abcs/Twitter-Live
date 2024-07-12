import React, { useCallback } from "react";
import { Sidebar } from "./Sidebar/Sidebar";
import { Feed } from "./Feed/Feed";
import { Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, signOut } from "firebase/auth";
import Widgets from "./Widgets/Widgets";

export const Home = () => {
  const auth = getAuth();
  const user = useAuthState(auth);

  // if (user) console.log(user[0]?.email);
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div className="flex w-5/6 mt-6 m-auto">
      <div className="w-1/6">
        <Sidebar handleLogout={handleLogout} user={user} />
      </div>
      <div className="w-3/6">
        <Outlet />
      </div>
      <div className="w-2/6">
        <Widgets />
      </div>
    </div>
  );
};

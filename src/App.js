import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/Login/SignUp";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import { PageLoding } from "./pages/PageLoding";
import Sidebar from "./pages/Sidebar/Sidebar";
import { Feed } from "./pages/Feed/Feed";
import Explore from "./pages/Explore/Explore";
import Notifications from "./pages/Notifications/Notifications";
import Lists from "./pages/Lists/Lists";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import More from "./pages/More/More";
import Profile from "./pages/Profile/Profile";
import Messages from "./pages/Messages/Messages";
import { Error } from "./pages/Error";

function App() {
  return (
    <div className="select-none">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          >
            <Route index element={<Feed />} />
          </Route>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          >
            <Route index element={<Feed />} />
            <Route path="/home/feed" element={<Feed />} />
            <Route path="/home/explore" element={<Explore />} />
            <Route path="/home/notifications" element={<Notifications />} />
            <Route path="/home/lists" element={<Lists />} />
            <Route path="/home/bookmarks" element={<Bookmarks />} />
            <Route path="/home/more" element={<More />} />
            <Route path="/home/profile" element={<Profile />} />
            <Route path="/home/messages" element={<Messages />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/page-loading" element={<PageLoding />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

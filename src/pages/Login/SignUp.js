import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import GoogleButton from "react-google-button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [signInWithMicrosoft, googleuser, googleloading, googleerror] =
    useSignInWithGoogle(auth);

  const handlesubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(email, password);
    // mongo user
    const userData = {
      name: name,
      username: username,
      email: email,
    };
    try {
      axios
        .post("https://twitter-api-taupe.vercel.app/register", userData)
        .then((res) => {
          console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handlegooglesign = () => {
    signInWithMicrosoft();
  };

  if (user || googleuser) {
    navigate("/");
    console.log(user);
    console.log(googleuser);
  }
  if (loading || googleloading) {
    console.log("loading....");
  }
  if (error || googleerror) {
    console.log(error);
    console.log(googleerror);
  }

  return (
    <div className="grid sm:grid-cols-2 text-black">
      <div className="hidden h-screen md:flex">
        <div className="w-4/6 m-auto">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-rxcuwo r-1777fci r-m327ed r-494qqr"
          >
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>{" "}
        </div>
      </div>
      <div className="w-full md:w-4/6 mx-auto">
        <h2 className="text-7xl mb-8 mt-16 text-center md:text-start font-bold">
          Happing now
        </h2>
        <div className="w-6/6 flex flex-col">
          <p className="text-center md:text-start my-4 text-4xl font-semibold">
            Join today.
          </p>
          <form
            onSubmit={handlesubmit}
            className="w-6/6 md:w-4/6 h-auto flex flex-col mt-2 p-6 mx-6 md:mx-2 md:mr-12 rounded shadow-2xl"
          >
            <input
              type="text"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
              className="appearance-none block w-full bg-white border border-blue-300 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 mb-4"
            />
            <input
              type="text"
              placeholder="@username"
              onChange={(e) => setUserName(e.target.value)}
              className="appearance-none block w-full bg-white border border-blue-300 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 mb-4"
            />
            <input
              type="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none block w-full bg-white border border-blue-300 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 mb-4"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none block w-full bg-white border border-blue-300 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 mb-6"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-2xl"
            >
              Sign up
            </button>
            <div className="pt-6 m-auto rounded-md">
              <GoogleButton onClick={handlegooglesign} />
            </div>
            <div className="py-2 m-auto rounded-md">
              If Already Have account
              <Link className="text-blue-700 ml-2" to={"/login"}>
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { useNavigate } from "react-router-dom";

export const Error = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/"); // Navigate to the specified route
  };

  return (
    <div class="container mx-auto p-4 w-full h-screen flex flex-col justify-center items-center">
      <h1 class="text-4xl font-bold">Oops! Something went wrong.</h1>
      <p class="mt-2 my-4">We apologize for the inconvenience.</p>
      <button
        onClick={handleClick}
        class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        Home Page
      </button>
    </div>
  );
};

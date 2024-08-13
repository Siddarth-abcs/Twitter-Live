import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import useLoggedInUser from "../../hooks/useLoggedInUser";
import axios from "axios";

const Subscription = () => {
  const [loggedInUser] = useLoggedInUser();
  const [user] = useAuthState(getAuth());
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      const amount = 5 * 100; // Convert to paisa
      const currency = "INR";
      const receiptId = "1234567890";

      // Create an order on the server
      const response = await fetch(
        "https://razorpay-server-nine.vercel.app/order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount,
            currency,
            receipt: receiptId,
          }),
        }
      );

      const order = await response.json();
      console.log("order", order);

      // Razorpay options
      const options = {
        key: "rzp_live_hHWp5kTLheuwS1",
        amount: amount,
        currency: currency,
        name: "Twitter",
        description: "Learn Books to improve yourself",
        order_id: order.id,
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#0D94FB",
        },
        prefill: {
          name: loggedInUser.name,
          email: loggedInUser.email,
          contact: loggedInUser.contact,
        },
        handler: async function (response) {
          // Function to handle successful payment
          subscribe();
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        alert("Payment failed. Please try again.");
        console.error(response.error);
      });
      rzp1.open();
    } catch (error) {
      console.error("Error creating order", error);
      alert("Failed to initiate payment. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };
  const subscribe = async () => {
    try {
      const data = {
        name: loggedInUser.name,
        email: loggedInUser.email,
        subscribe: "true",
      };
      console.log(data, "data");

      // Send order details to the server
      const orderResponse = await axios.post(
        "https://twitter-api-taupe.vercel.app/subscribe",
        data
      );
      console.log(orderResponse.data);
      alert("Enjoy unlimited postings");
      window.location = "/";
    } catch (error) {
      console.error("There was an error placing the order:", error);
      alert("Failed to place order. Please try again later.");
    }
  };

  return (
    <div>
      <div className="h-screen flex justify-center items-center bg-gradient-to-t from-indigo-600 via-indigo-700 to-indigo-700">
        <div className="rounded w-72 shadow-xl flex flex-col text-gray-200">
          <p
            className="font-semibold bg-white bg-opacity-20 rounded-t px-4 py-2"
            onClick={subscribe}
          >
            PRO without payment gateway test click me
          </p>

          <div className="flex flex-row items-center pt-8 bg-white bg-opacity-10 pl-12 pr-10 gap-3">
            <p className="text-5xl font-semibold pb-8">100000Rs</p>
          </div>
          <p className="text-center">
            this gateway used in live project after 4 8/2024 month it will
            remove 1/2025 <br></br> if you want to check payment gateway work or
            not so just pay 5Rs
          </p>

          <div className="grid grid-cols-12 bg-white bg-opacity-20 px-4 gap-y-3 pt-10">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="col-span-11 text-sm flex items-center font-semibold pl-2">
              Unlimited post
            </div>

            <div className="col-span-12 h-[1px] bg-white bg-opacity-20"></div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </div>
            <div className="col-span-11 text-sm flex items-center font-light pl-2">
              Everything in Unlimited
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="col-span-11 text-sm flex items-center font-light pl-2">
              Priority support
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="col-span-11 text-sm flex items-center font-light pl-2">
              Unlimited upload of many images and videos
            </div>

            <div className="col-span-12 mt-20 mb-5 text-gray-100">
              <button
                onClick={handlePayment}
                className="rounded hover:bg-teal-400 bg-black w-full py-3"
                disabled={isProcessing}
              >
                {isProcessing ? "Processing..." : "Subscribe Now"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;

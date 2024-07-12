import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const useLoggedInUser = () => {
  // const auth = ;
  const [user] = useAuthState(getAuth());
  const email = user ? user.email : null;
  // console.log(user.email);
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    fetch(`https://twitter-api-taupe.vercel.app/loggedInUser?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("from useLoggedinuser", data);
        const datadata = data === null ? "" : data;
        setLoggedInUser(datadata);
      });
  }, [email, loggedInUser]);

  return [loggedInUser, setLoggedInUser];
};

export default useLoggedInUser;

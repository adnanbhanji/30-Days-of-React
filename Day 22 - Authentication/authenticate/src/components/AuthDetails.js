// Import necessary modules
import React, { useEffect, useState } from "react";
import { auth } from "../firebase"; // Firebase configuration
import { onAuthStateChanged, signOut } from "firebase/auth"; // Firebase authentication functions

// Define a functional component named AuthDetails
const AuthDetails = () => {
  // Define a state variable authUser and initialize it to null
  const [authUser, setAuthUser] = useState(null);

  // Define an effect to listen for changes in the user's authentication state
  useEffect(() => {
    // Set up a listener using the onAuthStateChanged function from Firebase
    const listen = onAuthStateChanged(auth, (user) => {
      // If a user is logged in, set the authUser state variable to the user object
      if (user) {
        setAuthUser(user);
      }
      // If no user is logged in, set the authUser state variable to null
      else {
        setAuthUser(null);
      }
    });

    // Return a cleanup function to remove the listener when the component is unmounted
    return () => {
      listen();
    };
  }, []); // The empty array ensures that the effect runs only once, when the component is mounted

  // Define a function to sign the user out
  const userSignOut = () => {
    // Call the signOut function from Firebase with the auth object as the parameter
    signOut(auth)
      .then(() => {
        console.log("Sign out successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Return the JSX for rendering the component
  return (
    <div>
      {/* If authUser state variable is truthy (i.e., a user is logged in), show their email and a Sign Out button */}
      {authUser ? (
        <>
          <p>{`Signed In as ${authUser.email}`}</p>
          <button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        // If authUser state variable is falsy (i.e., no user is logged in), show a message indicating that the user is signed out
        <p>Signed Out</p>
      )}
    </div>
  );
};

// Export the AuthDetails component as the default export of this module
export default AuthDetails;

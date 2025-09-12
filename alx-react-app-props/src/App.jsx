import React from "react";
import UserContext from "./UserContext";
import UserProfile from "./UserProfile";

function App() {
  const userData = {
    name: "Simon Odoh",
    age: 25,
    bio: "Aspiring frontend developer"
  };

  return (
    <UserContext.Provider value={userData}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;







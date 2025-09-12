import React, { useContext } from "react";
import UserContext from "./UserContext";
import UserInfo from "./UserInfo";

function UserProfile() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>User Profile</h1>
      <UserInfo user={user} />
    </div>
  );
}

export default UserProfile;





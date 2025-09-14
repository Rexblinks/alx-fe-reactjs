import React from "react";
import UserDetails from "./UserDetails";

function UserInfo({ user }) {
  return (
    <div>
      <h2>User Info</h2>
      <UserDetails user={user} />
    </div>
  );
}

export default UserInfo;



import { useContext } from "react";
import UserContext from "./UserContext";
import UserInfo from "./UserInfo";

function UserProfile() {
  const userData = useContext(UserContext); // 👈 consume context here

  return <UserInfo userData={userData} />; // 👈 pass it as prop
}

export default UserProfile;




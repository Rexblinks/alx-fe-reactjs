import { useContext } from "react";
import UserContext from "../UserContext";
import UserInfo from './UserInfo';

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <UserInfo />
    </div>
  );
}

export default UserProfile;

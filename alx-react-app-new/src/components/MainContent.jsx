import React from "react";
import UserProfile from "./UserProfile";

function MainContent() {
  return (
    <main
      style={{
        padding: "20px",
        backgroundColor: "#eef2f3",
        minHeight: "300px",
      }}
    >
      <UserProfile name="Alice" age={25} bio="Loves traveling and photography." />
      <UserProfile name="Bob" age={30} bio="Enjoys coding and hiking." />
      <UserProfile name="Charlie" age={28} bio="Foodie and music enthusiast." />
    </main>
  );
}

export default MainContent;


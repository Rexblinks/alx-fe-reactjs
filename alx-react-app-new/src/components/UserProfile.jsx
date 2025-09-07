import React from "react";

function UserProfile(props) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "15px auto",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ color: "blue" }}>{props.name}</h2>
      <p>
        Age: <span style={{ fontWeight: "bold" }}>{props.age}</span>
      </p>
      <p style={{ fontStyle: "italic" }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;

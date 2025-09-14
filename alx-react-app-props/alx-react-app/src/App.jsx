import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: "0",
        padding: "0",
        backgroundColor: "#f4f4f9",
      }}
    >
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

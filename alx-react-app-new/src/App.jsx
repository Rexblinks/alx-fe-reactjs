import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter"; // 👈 add this

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Simon" age="25" bio="React developer in training!" />
      <Counter /> {/* 👈 show counter here */}
      <Footer />
    </div>
  );
}

export default App;

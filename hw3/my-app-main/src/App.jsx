import React from "react";
import Header from "./components/Header.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ProfileCard
          name="Shazia Azimi"
          email="Safeedbarfee22@gmail.com"
          avatar="https://via.placeholder.com/150"
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;

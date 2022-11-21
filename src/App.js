import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Shop from "./components/Shop";

// style App.css
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Shop />
      <Footer />
    </div>
  );
}

export default App;

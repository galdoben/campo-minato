import { useState } from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-fill d-flex justify-content-center align-items-center">
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import "./globalStyles.css";
import { LandingPage } from "./components/pages/LandingPage";
import { useState } from "react";
import { HomePage } from "./components/pages/HomePage";

function App() {
  const [page, setPage] = useState("LandingPage");
  return (
    <div className="App">
      {page === "LandingPage" ? (
        <LandingPage setPage={setPage} />
      ) : (
        <HomePage setPage={setPage} />
      )}
    </div>
  );
}

export default App;

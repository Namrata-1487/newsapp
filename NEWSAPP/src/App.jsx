import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Newsboard } from "./components/Newsboard";

function App() {
  const [category, setCategory] = useState("business");

  return (
    <>
      <div className="row d-flex">
        <div className="col-2">
          <Navbar setCategory={setCategory} />
        </div>
        <div className="col-10">
          <Newsboard category={category} />
        </div>
      </div>
    </>
  );
}

export default App;

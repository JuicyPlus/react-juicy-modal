import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
// import useModal from "../hooks/useModal";

const App = () => {
  const [router, setRouter] = React.useState("home");
  // const { openModal } = useModal({
  //   rootId: "modal-root",
  // });

  return (
    <div className="App">
      <div className="App-header">
        <div onClick={() => setRouter("home")}>Home</div>
        <div onClick={() => setRouter("about")}>About</div>
        {/* <button onClick={openModal}>Open Modal</button> */}
      </div>
      <div className="App-body">
        {router === "home" && <Home />}
        {router === "about" && <About />}
      </div>
    </div>
  );
};

export default App;

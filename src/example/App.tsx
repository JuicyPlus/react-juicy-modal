import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import useModal from "../hooks/useModal";

const App = () => {
  const [router, setRouter] = React.useState("home");

  // useModal에서 제공하는 ModalRoot로 모달이 Render될 부분을 지정합니다.
  const { ModalRoot } = useModal({
    rootId: "modal-root",
  });

  return (
    <div className="App">
      <div className="App-header">
        <div className="App-header-menu" onClick={() => setRouter("home")}>
          Home
        </div>
        <div className="App-header-menu" onClick={() => setRouter("about")}>
          About
        </div>
      </div>
      <div className="App-body">
        {router === "home" && <Home />}
        {router === "about" && <About />}
      </div>
      {/** Modal 이 실제로 render 되는 곳 */}
      <ModalRoot />
    </div>
  );
};

export default App;

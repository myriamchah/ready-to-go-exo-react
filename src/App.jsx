import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Switches from "./components/Switches";
import Footer from "./components/Footer";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  const resetSwitches = () => {
    setSwitch1(false);
    setSwitch2(false);
    setSwitch3(false);
  };

  return (
    <>
      <Header />
      <main>
        <div>
          <Switches
            {...{
              switch1,
              switch2,
              switch3,
              setSwitch1,
              setSwitch2,
              setSwitch3,
            }}
          />
        </div>
        <button
          style={{
            color: "white",
            padding: "24px 32px",
            backgroundColor:
              switch1 && switch2 && switch3 ? "lightgreen" : "coral",
          }}
        >
          {switch1 && switch2 && switch3 ? "Go !" : "No Way !"}
        </button>
      </main>
      <div className="emergency">
        <button onClick={resetSwitches}>EMERGENCY BUTTON</button>
      </div>
      <Footer />
    </>
  );
}

export default App;

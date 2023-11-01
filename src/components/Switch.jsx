const Switch = ({ switchx, setSwitch }) => {
  return (
    <div className="switch">
      <button
        onClick={() => {
          setSwitch(true);
        }}
        style={{
          backgroundColor: switchx ? "purple" : "white",
          color: switchx ? "white" : "purple",
        }}
      >
        ON
      </button>
      <button
        onClick={() => {
          setSwitch(false);
        }}
        style={{
          backgroundColor: switchx ? "white" : "purple",
          color: switchx ? "purple" : "white",
        }}
      >
        OFF
      </button>
    </div>
  );
};

export default Switch;
